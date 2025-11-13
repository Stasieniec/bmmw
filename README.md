# BMMW Films

Warsaw-based independent film studio website.

## Tech Stack

- Next.js 16 (Static Export)
- TypeScript
- Tailwind CSS
- Hosted on Cloudflare Pages

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Building for Production

```bash
npm run build
```

This generates a static site in the `out` directory.

## Deploying to Cloudflare Pages

### Via Cloudflare Dashboard

1. Go to Cloudflare Pages dashboard
2. Create a new project
3. Connect your Git repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** `18` (or higher)
5. Deploy!

### Via Wrangler CLI

```bash
npx wrangler pages deploy out
```

## Project Structure

- `/app` - Next.js app directory with pages
- `/app/portfolio` - Portfolio page
- `/app/o-nas` - About page
- `/app/kontakt` - Contact page
- `/components` - Reusable components
- `/public` - Static assets (images, logos, etc.)
