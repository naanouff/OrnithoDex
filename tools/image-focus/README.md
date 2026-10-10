# Outil local — Focus photos (bbox + tête)

Labellise la **bounding box** de l’animal et le **point tête** pour un crop intelligent (fiche / quiz).

**Hors application React.**

## Lancer

```bash
npm run focus:tool
```

→ [http://127.0.0.1:4177](http://127.0.0.1:4177)

## Usage

1. **BBox** — glisser un rectangle autour de tout l’oiseau  
2. **Tête** — cliquer la tête (passe auto après la bbox)  
3. Vérifier l’aperçu crop 3:4  
4. **Enregistrer** (Ctrl+S) → `src/data/image-focus.json`

Pastille liste : vert = bbox+tête · orange = partiel · gris = vide.

## Schéma

```json
{
  "slug": {
    "head": { "x": 48, "y": 22 },
    "bbox": { "x": 12, "y": 8, "w": 70, "h": 82 }
  }
}
```
