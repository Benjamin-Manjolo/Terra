# Terra Marketing Website

Marketing website for **Terra**, an offline-first, AI-powered agricultural companion for Malawian smallholder farmers.

## About Terra

Terra helps farmers:

- **Scan**: On-device AI breed & disease detection in under 5 seconds, entirely offline (TensorFlow Lite), with a Roboflow-hosted fallback when online for higher accuracy.
- **Heal**: Treatment guides, first-aid protocols, and emergency vet contacts for FMD, Mastitis, Lumpy Skin Disease, Brucellosis, and Anthrax, in English or Chichewa.
- **Trade**: A trust-scored marketplace with escrow-protected payments.
- **Grow**: An agripreneur dashboard with revenue analytics, pending deliveries, and trust scores.
- **Learn**: Offline field guides on crops, livestock, business ideas, and value-added processing.
- Community groups, vet & agronomist consultations, district outbreak alerts, and full Chichewa + English localization.

Terra works entirely without internet, syncing opportunistically, and is aligned with the Malawi 2063 Vision.

## Stack

- React + TypeScript (Vite)
- Tailwind CSS + shadcn/ui components
- Framer Motion animations
- Recharts (herd-loss estimator chart)

## Scripts

```bash
npm install
npm run dev        # start local dev server
npm run build      # production build to dist/
npm run preview    # preview the production build
npm run lint       # eslint
npm run test       # vitest
```

## TODOs before launch

See `// TODO:` / `// PLACEHOLDER:` comments across `index.html`, `src/components/Navbar.tsx`, `src/pages/Index.tsx`, `src/pages/Invest.tsx`, `src/pages/Early.tsx`:

- Replace all `#` app-store links with real Play Store / App Store URLs.
- Replace OG/Twitter social share image `https://example.com/terra-og.png` with a real hosted image.
- Replace `@terraapp` social handle with the real Terra handle.
- Replace illustrative figures in the herd-loss estimator and hero stats with your own data.
- Replace the illustrative beta testimonial (Chikondi B.) with a real farmer quote once you have permission.
- Set up the Firebase project ID in `.firebaserc` for hosting deploys.
