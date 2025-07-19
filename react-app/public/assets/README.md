# Assets Folder

This folder contains all the assets used in the Reverse: 1999 Team Builder application.

## Structure

- `characters/` - Contains character portrait images
  - Images are in WEBP format for optimal quality and file size
  - Named using the pattern: `Character_Name_Poster.webp` (with underscores)
  - Some have variations like `_CN`, `_Poster1`, or `_Overture_1`

## Character Image Naming Convention

Character images use underscores and follow these patterns:

- "37" → `37_Poster.webp`
- "An-an Lee" → `An-an_Lee_Poster.webp`
- "Ms. NewBabel" → `Ms._NewBabel_Poster.webp`
- "Druvis III" → `Druvis_III_Poster.webp`
- "Anjo Nala" → `Anjo_Nala_Poster_CN.webp` (CN version)
- "Isolde" → `Isolde_Poster1.webp` (variant)
- "Ulrich" → `Ulrich_Overture_1.webp` (special version)

## Fallback

If a character image is not found, the application will display a placeholder error image automatically.
