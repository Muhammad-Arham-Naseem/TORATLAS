# TORATLAS Alpha v0.2 — zero-cost, GitHub Pages ready

A **functional static educational research application**. Keep `index.html` and `records.js` together at the **root of your GitHub repository**.

## Features that work
- Multi-page responsive website with current sword illustration, animations and six original workspaces plus Research Desk and ML Lab.
- Search 12 manually curated museum-linked objects, including 6 records relevant to **Zulfiqar / Dhu’l Fiqar**, with spelling variants and catalog numbers. Source links are live URLs, not embedded copyrighted museum images.
- Local image upload and preview; **manual** visible-feature comparison, explicitly not AI vision.
- Materials-science educational explanations.
- Interactive rectangular cantilever first-yield calculator, sensitivity graph, ±10% input-bound illustration.
- Beam report text download / print-to-PDF.
- Browser-local research notebook with source URLs, evidence categories, deletion, JSON export.
- Local CSV reader for dataset-column and missing-value inspection; exports a quality note.

## Features NOT yet implemented
- A real AI image identification model. Image preview and manual observations work; **no ML inference** takes place.
- A trained steel-property prediction model; no dataset has been validated for this use, and no predictive performance results exist.
- Live cross-institution museum search, backend/database synchronization, authentication, or persistent shared user accounts.

## Run or deploy
1. For local testing, open `index.html` in a browser with `records.js` in the same folder.
2. For GitHub Pages, upload **both files** to repository root, click Commit changes; GitHub Pages will publish updated content automatically if already enabled.
3. Never insert private API keys into GitHub Pages source files.

## Source references
Source links are provided on every museum object. The Zulfiqar records cite Worcester Art Museum, The Metropolitan Museum of Art, and Grand Curtius. Their curatorial descriptions distinguish historic artifacts from iconography or claims about the legendary original.

## Science boundaries
Mechanical model uses user-specified *hypothetical* yield strength, not a historical test. Reports and plots are computed, not empirical measurements. CSV inspection is descriptive and not ML training.

## No fees
No accounts, billing, Node packages, hosting subscriptions, or external API keys needed for this static app. No build steps.
