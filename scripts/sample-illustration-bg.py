"""Échantillonne la couleur de fond (coins) de chaque illustration WebP."""
from __future__ import annotations

import json
import sys
from pathlib import Path

from PIL import Image
import numpy as np

CORNER = 24
DEFAULT = "#fbf5e1"


def sample_bg(path: Path) -> str:
    im = Image.open(path).convert("RGB")
    a = np.asarray(im)
    h, w = a.shape[:2]
    c = min(CORNER, h // 4, w // 4)
    if c < 2:
        return DEFAULT
    patches = np.concatenate(
        [
            a[:c, :c].reshape(-1, 3),
            a[:c, -c:].reshape(-1, 3),
            a[-c:, :c].reshape(-1, 3),
            a[-c:, -c:].reshape(-1, 3),
        ],
        axis=0,
    )
    # Médiane robuste aux pixels d’ombre / antialias
    med = np.median(patches, axis=0).astype(int)
    return "#{:02x}{:02x}{:02x}".format(int(med[0]), int(med[1]), int(med[2]))


def main() -> int:
    if len(sys.argv) < 3:
        print("Usage: sample-illustration-bg.py <illustrations-dir> <out.json>", file=sys.stderr)
        return 1
    src = Path(sys.argv[1])
    out = Path(sys.argv[2])
    data: dict[str, str] = {}
    for f in sorted(src.glob("*.webp")):
        data[f.stem] = sample_bg(f)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"OK - {len(data)} fonds -> {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
