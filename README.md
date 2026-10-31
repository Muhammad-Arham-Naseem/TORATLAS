# TORATLAS Alpha v0.5.1 — repair release

This repairs a JavaScript startup crash in the v0.5 sword viewer implementation, which prevented the rest of the website from responding to clicks. The viewer loads via modern Three.js ES modules and initializes only after a historical profile is opened.

Upload the two website files to your existing GitHub repository root:
- `index.html`
- `records.js`

`README.md` is optional documentation. There are no additional files or subscriptions.

The viewer requires a browser with WebGL and internet access to the jsDelivr CDN. Its shapes are stylized conceptual studies, not museum-object 3D scans.

The full interactive browser test could not run in the restricted test environment; JavaScript syntax verification was performed instead.
