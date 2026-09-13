# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Next.js (App Router, TypeScript, Tailwind CSS v4) recreation of Yelam Lawoti's photography portfolio site. It was rebuilt from a SingleFile-saved snapshot of an externally-hosted site (`Yelam Lawoti — Photography (*).html` in the repo root); that snapshot is a local reference only — it is gitignored (`Yelam Lawoti*.html`) and never committed, and the app does not read it at build or run time. All content and photos were extracted from it once into real source files (`src/lib/photos.ts`, `public/photos/`), so the site works whether or not that file is present.

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build (also runs the TypeScript check)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`)

There is no test suite yet.

## Architecture

- `src/app/page.tsx` composes the page from section components in `src/components/`: `SiteHeader`, `Hero`, `WorkSection`, `AboutSection`, `SiteFooter`.
- `src/lib/photos.ts` is the single source of truth for the portfolio grid — each entry carries the image path/dimensions/alt text plus its Unsplash credit. `WorkSection` and `PhotographyCredits` both read from this array, so adding/reordering/removing a photo is a one-file change.
- `src/components/PhotoCard.tsx` holds the three image treatments used across the grid: `FeaturePhoto` (full-bleed, optional dark-gradient overlay caption — used for items 1 and 4), `GridPhoto` (cropped 3:4 tile used in the two-column pairs), and `PolaroidPhoto` (uncropped, framed in a bordered card — used for the last "Blue hour" item, which is a scanned Polaroid with its own baked-in white border).
- `PhotographyCredits` is a native `<details>/<summary>` accordion (no client JS) so credits expand/collapse even without hydration.
- Brand tokens (light background/foreground, the dark footer "ink" palette, the rust and sage accents) are defined once in `src/app/globals.css` via `@theme inline` and consumed as Tailwind utilities (`bg-ink-bg`, `text-accent-rust`, etc.) — extend the palette there rather than hardcoding hex values in components.
- Actual photography is placeholder: real Unsplash photos used under the Unsplash License until Yelam's own work replaces them (noted on the site itself and in `PhotographyCredits`).
