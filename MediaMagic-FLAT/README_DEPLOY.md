# Deployment & Notes for MediaMagic

This repository is prepared to deploy a full-stack Vite + Node server application.
The build process:
1. `vite build` -> client static files output to `dist/public`
2. `esbuild server/index-prod.ts` -> server bundle to `dist/index.js`
3. `node dist/index.js` -> serve app (serves static files from dist/public)

## Deploy on Render (recommended for full app)
1. Create a new Web Service on Render.
2. Connect your GitHub repo or drag & drop this ZIP.
3. Use the following settings:
   - Environment: Node
   - Build Command: `npm ci && npm run build`
   - Start Command: `npm run start`
   - Plan: Free (or as desired)
4. Add any environment variables required (e.g., DATABASE_URL, API keys).
5. Deploy — Render will run the build and start the Node server.

## Deploy static client only (no server) on Vercel / Netlify
If you want to host only the client (no server-side runtime), you can deploy the `dist/public` folder as a static site:
- Vercel: uses `vercel.json` in repository; Vercel will run `npm run build` and publish `dist/public`.
- Netlify: uses `netlify.toml`; build command `npm ci && npm run build`, publish folder `dist/public`.

Note: Deploying to Vercel/Netlify will not run the Node server (`dist/index.js`). To run server on these platforms you'd need to convert server to serverless functions or host server on Render/Railway.

## Local test
1. Install dependencies: `npm ci`
2. Build: `npm run build`
3. Run: `npm run start`
4. Visit: `http://localhost:3000` (or check server logs for port)

## Files added for deployment
- render.yaml
- Procfile
- vercel.json
- netlify.toml
- README_DEPLOY.md

If you want, I can:
- Push these changes to a GitHub repo
- Create a Render service for you (instructions)
- Convert server to serverless functions for Vercel/Netlify

