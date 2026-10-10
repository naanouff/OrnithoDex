# Plan — Focus photos : bbox + tête (outil local)

Document de référence consigné le **2026-10-10**. Complète le [plan design](plan-design.md). Toute évolution majeure → ce fichier + [journal](../journal/).

Sprint : [sprint-image-focus.md](sprint-image-focus.md).

## Vue d’ensemble

Labelliser chaque **photo** avec :

1. **Bounding box** de l’animal — zoom / crop intelligent
2. **Point tête** — ancrage si le cadre doit encore serrer

Usage rendu : **fiche / quiz**. La **collection** utilise les **illustrations** ([plan-suivi-illustrations.md](plan-suivi-illustrations.md)).

## Contrainte non négociable

| Règle | Détail |
|-------|--------|
| **Outil local uniquement** | `tools/image-focus/` — hors bundle élève |
| **Hors application** | Aucune route React |
| **Prod élève** | Lit seulement `src/data/image-focus.json` |

## Schéma

```json
{
  "agapornis-fischeri": {
    "head": { "x": 48, "y": 22 },
    "bbox": { "x": 12, "y": 8, "w": 70, "h": 82 }
  }
}
```

Coordonnées en **%** de l’image source (0–100).  
Rétrocompat : ancien `{ "x", "y" }` = tête seule.

## Rendu

- Avec **bbox** : crop couvrant la box (+ marge), aspect 3:4, tête gardée dans le cadre
- Sans bbox : `object-fit: cover` + `object-position` sur la tête
- Fallback : tête `50% 12%`

## Outil

```bash
npm run focus:tool
```

→ http://127.0.0.1:4177

1. Mode **BBox** — glisser un rectangle autour de l’animal  
2. Mode **Tête** — clic sur la tête  
3. **Enregistrer** → `src/data/image-focus.json`

Raccourcis : `B` bbox · `T` tête · flèches · Ctrl+S

## Documents liés

- [sprint-image-focus.md](sprint-image-focus.md)
- [plan-suivi-illustrations.md](plan-suivi-illustrations.md)
- [tools/image-focus/README.md](../../tools/image-focus/README.md)
