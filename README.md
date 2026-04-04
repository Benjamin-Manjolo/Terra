# Oakly Invest

## Run locally

```bash
npm install
npm run dev
```

## Firebase Hosting deployment (Vite + SPA)

If Firebase shows the default **"Congratulations"** page, it means Hosting is not serving your built app output.

This repo is configured for Firebase Hosting via `firebase.json` to:
- serve from `dist`
- rewrite all routes to `/index.html` (required for React Router SPA routes)

### Deploy steps

1. Set your Firebase project (one-time):
   ```bash
   firebase use --add
   ```
   Or copy `.firebaserc.example` to `.firebaserc` and put your project id.

2. Build the app:
   ```bash
   npm run build
   ```

3. Deploy hosting:
   ```bash
   firebase deploy --only hosting
   ```

After deploy, your Hosting URL should load the app (not the default Firebase page).
