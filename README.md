# Multi-Agent AI Workshop — portfolio

English, responsive, static portfolio with nine original screenshots, four original French ticket/agent reports, original-system architecture and a seven-view browser-only console simulation. The simulation supports success, one correction loop, developer failure, approval/rejection and restart with history. It does not run actual agents, call Copilot, execute Git, or use real SSE. The original backend is described, not deployed. The demonstration UI is an independent lightweight implementation inspired by the supplied React console; it does not reuse its React components.

## Quick start

Node.js 20+ (22 recommended). No dependencies needed to generate the static site:

```sh
node scripts/build.mjs
```

Serve `dist` with a local HTTP server, e.g. with Python installed:

```sh
python -m http.server 8080 --directory dist
```

Visit http://localhost:8080. Alternatively use Vite:

```sh
npm install
npm run dev
```

Production build: `npm run build` (Vite) or `node scripts/build.mjs` (dependency-free).

## Vercel

1. Review every screenshot and report for sensitive data before sharing. The supplied images and reports are included unchanged; identifiers, filenames, timestamps and project details can be visible. Remove/replace anything confidential. No original repository, tokens or runtime state are packaged. The screenshots cover different tickets, and the recorded case is VelibLLM-51p.
2. Create a dedicated private GitHub repository and upload this project (exclude `dist` and `node_modules`).
3. Import that repository in Vercel. Select Other framework preset, build command `node scripts/build.mjs`, output directory `dist`, install command `echo No dependencies required`. Deploy. The default Vercel URL is sufficient for a portfolio. Check plan terms before use.
4. Open the deployed site on desktop/mobile and test all three scenarios, both human decisions and screenshot/report views. Add the URL to your CV only after confirming publication is appropriate.

You can also deploy `dist/` to any static host. Relative paths are used for subdirectory hosting.

## Evidence / scope

The real case study reports 3 additional tests, 9/9 passed and 0 build errors. These are reported host results, not independently rerun here. Existing NU1903 warnings are acknowledged. Final human approval is not documented. Original screenshots and agent reports are shown separately from synthetic demo events and illustrative diff. The actual source documentation says human checkpoint resume is supported; arbitrary crash continuation is not implemented.

## Personalize

Edit `index.html` About section to add your name, verified LinkedIn/GitHub links and a public CV if desired. No fabricated personal contact links are included. CSS is in `src/style.css`, simulation in `src/main.js`, assets under `public/`. No trackers or external assets are used.
