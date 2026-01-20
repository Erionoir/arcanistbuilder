# ArcanistBuilder

Modern single-page app for Reverse: 1999 team building, tier list browsing, and character library exploration.

## Features
- **AI Team Builder** powered by Chutes (OpenAI-compatible) with live streaming output.
- **Tier List** view with role/tier matrix and compact name overlays.
- **Arcanist Library** with search, filters, and detailed character profiles.
- **Beautiful UI** built with React, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Vite + React 18**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**

## Getting Started

```bash
npm install
npm run dev
```

Open the local dev server URL shown in the terminal.

## Build & Preview

```bash
npm run build
npm run preview
```

## Configuration

### Chutes API (Team Builder)
The Team Builder connects to Chutes via an OpenAI-compatible endpoint. Configure it directly in the **Settings** panel in the UI.

Values are stored in **localStorage**:
- `chutesEndpoint` (default: `https://llm.chutes.ai`)
- `chutesModel` (default: `deepseek-r1`)
- `chutesApiKey`
- `chutesKeyLoadouts` / `chutesActiveKeyId`

## Data & Assets

- **Character data**: `src/data/characters.js`
- **Meta/Team data**: `src/data/metaData.js`
- **Static assets**: `public/assets/*`

To add or update character profiles, extend the `profile` object inside the matching character in `src/data/characters.js`.

## Project Structure

```
src/
  components/        # UI components (TeamBuilder, TierList, Library)
  data/              # character + meta data
  index.css          # Tailwind base styles
  main.jsx           # app entry
public/
  assets/            # images, icons, audio, gallery
```

## Notes
- The legacy static site is kept in `legacy_v1/` for reference only.
- All runtime assets are served from `public/assets` and referenced using absolute paths (e.g. `/assets/...`).
