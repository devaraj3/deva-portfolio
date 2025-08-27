# Portfolio Scaffold

Production-ready portfolio built with Next.js 14, TypeScript and Tailwind CSS.

## Getting Started

```bash
pnpm install
pnpm dev
```

## Data

Place your content file at `data/portfolio.content.json`. An example structure is
provided at `data/portfolio.content.example.json`.

## Case Studies

Add MDX files in `content/case-studies/your-slug.mdx`.
Run the admin UI (`/admin`) locally to create stubs and append to the JSON file.
Commit generated files when pushing.

## Testing

```bash
pnpm test
```

## Deploying on Vercel

1. Import the repo in Vercel.
2. Set environment variables:
   - `ADMIN_PASSWORD` – protects `/admin`.
   - `SITE_URL` – base URL used for sitemap and JSON-LD.
   - `RESEND_API_KEY` – optional, enables contact form emails.
3. `pnpm build` and `pnpm start` will be used by Vercel.

## Scripts

- `pnpm dev` – start development server.
- `pnpm build` – build for production.
- `pnpm start` – run production build.
- `pnpm test` – run vitest.

## Notes

- `/api/og` generates dynamic Open Graph images.
- `/api/oembed` fetches and caches LinkedIn/Instagram embeds.
- `/api/contact` is provider-ready for Resend.
- `/admin` is password protected via `ADMIN_PASSWORD`.
- Dark mode is handled by `next-themes` with a class toggle.
