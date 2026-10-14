# -*- coding: utf-8 -*-
"""Poids et reproduction sauvage depuis les champs chiffrés ADW.
Taille de cage et prix : l'arrêté du 8 octobre 2018 ne donne ni cm ni tarif.
"""
import re
import subprocess
from pathlib import Path

FICHES = Path(__file__).resolve().parents[1] / "documentation/ornithologie/fiches-naturaliste"
CACHE = Path.home() / "AppData/Local/Temp/ornithodex-research/adw-repro"
CACHE.mkdir(parents=True, exist_ok=True)

MONTHS = [
    ("january", "janvier"),
    ("february", "février"),
    ("march", "mars"),
    ("april", "avril"),
    ("may", "mai"),
    ("june", "juin"),
    ("july", "juillet"),
    ("august", "août"),
    ("september", "septembre"),
    ("october", "octobre"),
    ("november", "novembre"),
    ("december", "décembre"),
]
LABELS = {
    "range mass",
    "average mass",
    "breeding season",
    "range eggs per season",
    "average eggs per season",
    "range time to hatching",
    "average time to hatching",
    "range length",
    "average length",
    "breeding interval",
}

CAGE = (
    "L’arrêté du 8 octobre 2018, pour les espèces non domestiques, demande un hébergement "
    "adapté aux besoins physiologiques et comportementaux. Il ne fixe aucune dimension de cage pour les oiseaux."
)
PRICE = (
    "Pas de prix dans l’arrêté du 8 octobre 2018, ni dans l’index EAZA, ni dans la liste AZA "
    "(consultés le 2026-10-14). Les annonces d’animalerie ne sont pas une source."
)
TRACE = "Non documenté — page ADW consultée le 2026-10-14, ce chiffre n’y figure pas."
NO_PAGE = "Non documenté — pas de page ADW exploitable le 2026-10-14."


def plain(html: str) -> str:
    html = re.sub(r"<script[\s\S]*?</script>", " ", html, flags=re.I)
    text = re.sub(r"<[^>]+>", "\n", html)
    text = re.sub(r"[ \t]+", " ", text)
    return re.sub(r"\n+", "\n", text)


def block_after(lines, label):
    try:
        i = next(n for n, line in enumerate(lines) if line.strip().lower() == label)
    except StopIteration:
        return []
    out = []
    for line in lines[i + 1 :]:
        s = line.strip()
        if s.lower() in LABELS:
            break
        if s:
            out.append(s)
        elif out:
            break
    return out


def grams(lines, label):
    chunk = block_after(lines, label)
    for line in chunk:
        if re.search(r"\bg\b", line) and "oz" not in line.lower():
            return line.replace(" to ", " à ")
    return None


def season_fr(lines):
    chunk = block_after(lines, "breeding season")
    if not chunk:
        return None
    text = " ".join(chunk).lower()
    if any(k in text for k in ("year-round", "throughout the year", "all year")):
        return "Toute l’année (ADW)."
    found = []
    for en, fr in MONTHS:
        pos = text.find(en)
        if pos >= 0:
            found.append((pos, fr))
    found.sort()
    names = [fr for _, fr in found]
    if len(names) >= 2:
        return f"De {names[0]} à {names[-1]} (ADW)."
    if len(names) == 1:
        return f"Mois cité par ADW : {names[0]}."
    return None


def number_line(lines, label, skip_anage=True):
    chunk = block_after(lines, label)
    if not chunk:
        return None
    if skip_anage and any(line == "AnAge" for line in chunk):
        return None
    line = chunk[0]
    if not re.search(r"\d", line):
        return None
    return line.replace(" to ", " à ").replace("-", " à ") if "day" not in line else line


def hatching(lines):
    own = number_line(lines, "average time to hatching", skip_anage=True)
    if own and "day" in own:
        n = re.search(r"\d+", own)
        return f"{n.group()} jours en moyenne jusqu’à l’éclosion (ADW)." if n else None
    via = number_line(lines, "average time to hatching", skip_anage=False)
    if via and "AnAge" in block_after(lines, "average time to hatching"):
        n = re.search(r"\d+", via)
        if n:
            return f"{n.group()} jours en moyenne jusqu’à l’éclosion (AnAge, cité sur la page ADW)."
    return None


def eggs(lines):
    rng = number_line(lines, "range eggs per season", skip_anage=True)
    avg_chunk = block_after(lines, "average eggs per season")
    avg = None
    via_anage = False
    if avg_chunk and re.search(r"\d", avg_chunk[0]):
        if "AnAge" in avg_chunk:
            via_anage = True
            avg = avg_chunk[0]
        else:
            avg = avg_chunk[0]
    parts = []
    if rng:
        parts.append(f"{rng.replace(' to ', ' à ')} œufs par saison")
    if avg and not via_anage:
        parts.append(f"moyenne {avg.replace('-', ' à ')}")
    elif avg and via_anage and not rng:
        parts.append(f"moyenne {avg} (AnAge, cité sur la page ADW)")
    if not parts:
        return None
    return " ; ".join(parts) + " (ADW)." if not (via_anage and not rng) else parts[0] + "."


def fetch(url: str, dest: Path) -> bool:
    if dest.exists() and dest.stat().st_size > 5000:
        return True
    r = subprocess.run(
        ["curl.exe", "-fsSL", "--max-time", "40", "-o", str(dest), url],
        capture_output=True,
    )
    return r.returncode == 0 and dest.exists() and dest.stat().st_size > 5000


def adw_of(md: str):
    m = re.search(
        r"\| (adw-[a-z0-9-]+) \|[^|]*\|[^|]*\|[^|]*\| (https://animaldiversity.org/accounts/[^/\s|]+/)",
        md,
    )
    if not m:
        return None, None
    return m.group(1), m.group(2)


def program_name(md: str) -> str:
    m = re.search(r"\| Nom scientifique(?: \(programme\))? \| ([^|]+) \|", md)
    return m.group(1).strip() if m else ""


def insert_poids(md: str, value: str, source: str) -> str:
    if "| Poids |" in md:
        return md
    row = f"| Poids | {value} | {source} |\n"
    if "| Taille adulte |" in md:
        return re.sub(r"(\| Taille adulte \|[^\n]*\n)", r"\1" + row, md, count=1)
    if "| Longévité |" in md:
        return md.replace("| Longévité |", row + "| Longévité |", 1)
    return md


def main():
    files = sorted(p for p in FICHES.glob("*.md") if not p.name.startswith("_"))
    filled = {"mass": 0, "season": 0, "eggs": 0, "hatch": 0}
    for path in files:
        md = path.read_text(encoding="utf-8")
        if "## Taille de cage" in md:
            continue
        sid, url = adw_of(md)
        facts = {}
        note = ""
        if url:
            dest = CACHE / (sid + ".html")
            ok = fetch(url, dest)
            if ok:
                text = plain(dest.read_text(encoding="utf-8", errors="replace"))
                if "Physical Description" not in text and "Reproduction" not in text:
                    ok = False
            if ok:
                lines = text.splitlines()
                mass = grams(lines, "range mass") or grams(lines, "average mass")
                if mass and "moyenne" not in mass and grams(lines, "range mass") is None:
                    mass = f"{mass} (moyenne)"
                elif grams(lines, "range mass") and grams(lines, "average mass"):
                    mass = f"{grams(lines, 'range mass')} ; moyenne {grams(lines, 'average mass')}"
                binomial = url.rstrip("/").split("/")[-1].replace("_", " ")
                prog = program_name(md)
                if binomial and not prog.lower().startswith(binomial.lower()):
                    note = f"Page ADW {binomial}. "
                facts = {
                    "mass": (note + mass) if mass else None,
                    "season": season_fr(lines),
                    "eggs": eggs(lines),
                    "hatch": hatching(lines),
                    "sid": sid,
                }
            else:
                facts = {"sid": None}
        else:
            facts = {"sid": None}

        sid = facts.get("sid")
        if sid and facts.get("mass"):
            md = insert_poids(md, facts["mass"], sid)
            filled["mass"] += 1
        trace_src = sid or ""
        def cell(key, stat):
            if sid and facts.get(key):
                filled[stat] += 1
                return facts[key], sid
            if sid:
                return TRACE, sid
            return NO_PAGE, ""

        season, ss = cell("season", "season")
        clutch, cs = cell("eggs", "eggs")
        incub, hs = cell("hatch", "hatch")
        repro = (
            "## Reproduction\n\n"
            "| Champ | Valeur | Source |\n"
            "|-------|--------|--------|\n"
            f"| Période | {season} | {ss} |\n"
            f"| Nombre d'œufs | {clutch} | {cs} |\n"
            f"| Temps de couvaison | {incub} | {hs} |\n\n"
        )
        cage = f"## Taille de cage\n\n{CAGE}  \n*Source : arrete-08-octobre-2018.*\n\n"
        price = (
            f"## Prix en animalerie\n\n{PRICE}  \n*Sources : arrete-08-octobre-2018 ; eaza-bpg ; aza-acm.*\n\n"
            f"## Prix sur internet\n\n{PRICE}  \n*Sources : arrete-08-octobre-2018 ; eaza-bpg ; aza-acm.*\n\n"
        )
        anchor = "## Alimentation en captivité"
        if anchor not in md:
            raise SystemExit(f"ancre absente {path.name}")
        md = md.replace(anchor, repro + cage + price + anchor, 1)
        if "| arrete-08-octobre-2018 |" not in md:
            if not md.endswith("\n"):
                md += "\n"
            md += (
                "| arrete-08-octobre-2018 | Arrêté du 8 octobre 2018 fixant les règles générales de détention d’animaux d’espèces non domestiques | Journal officiel | 2018 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000037491137/ | Consulté 2026-10-14 ; pas de dimensions de cage |\n"
            )
        path.write_text(md, encoding="utf-8")
        print(path.stem, "masse" if facts.get("mass") else "-", "saison" if facts.get("season") else "-", "oeufs" if facts.get("eggs") else "-", "couv" if facts.get("hatch") else "-")
    print("FILLED", filled)


if __name__ == "__main__":
    main()
