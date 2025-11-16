# Cloudflare Pages Deployment Guide

This guide will help you deploy your BMMW Films website to Cloudflare Pages.

## ✅ Prerequisites

Your site is already configured for Cloudflare Pages with:
- Static export enabled (`output: 'export'`)
- Optimized images for static hosting
- All SEO files in place

## 🚀 Deployment Steps

### 1. Push to GitHub/GitLab

First, commit and push your code to a Git repository:

```bash
git add .
git commit -m "Ready for Cloudflare Pages deployment"
git push origin main
```

### 2. Create Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Pages** in the left sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Select your repository (GitHub or GitLab)
6. Authorize Cloudflare to access your repository

### 3. Configure Build Settings

Use these exact settings in Cloudflare Pages:

**Framework preset:** `Next.js (Static HTML Export)`

**Build command:**
```
npm run build
```

**Build output directory:**
```
out
```

**Node version:** (Add environment variable)
- Variable name: `NODE_VERSION`
- Value: `20.11.0` or higher

### 4. Environment Variables (Optional)

If you need any environment variables, add them in the Cloudflare dashboard:
- Click on your project
- Go to **Settings** → **Environment variables**

### 5. Custom Domain Setup

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain: `bmmwfilms.com`
4. Follow the DNS setup instructions

**DNS Records to add:**
```
Type: CNAME
Name: @ (or www)
Target: <your-pages-project>.pages.dev
Proxy status: Proxied (orange cloud)
```

### 6. SSL/TLS Settings

1. Go to **SSL/TLS** in Cloudflare dashboard
2. Set encryption mode to **Full (strict)**
3. Enable **Always Use HTTPS**

## 📊 Performance Optimizations

Cloudflare Pages automatically provides:
- ✅ Global CDN distribution
- ✅ Automatic HTTPS
- ✅ DDoS protection
- ✅ Instant cache invalidation on deployments
- ✅ Preview deployments for branches

## 🔍 Post-Deployment Checklist

After deployment, verify:

- [ ] Main domain loads correctly
- [ ] All pages (/, /o-nas, /kontakt) work
- [ ] Images display properly
- [ ] Video loads on homepage
- [ ] Mobile menu works
- [ ] Test social media preview: https://cards-dev.twitter.com/validator
- [ ] Test Open Graph: https://www.opengraph.xyz/
- [ ] Submit sitemap to Google Search Console: `https://bmmwfilms.com/sitemap.xml`

## 🔄 Automatic Deployments

Cloudflare Pages will automatically deploy when you:
- Push to your `main` branch (production)
- Push to any other branch (preview deployment)

## 📝 Important Files for Cloudflare

Your site includes:
- ✅ `/public/_headers` - Security and caching headers
- ✅ `/public/robots.txt` - Search engine instructions
- ✅ `/public/sitemap.xml` - SEO sitemap
- ✅ `/public/manifest.json` - PWA manifest
- ✅ Static favicon and logos

## 🌐 URLs After Deployment

- **Production:** `https://bmmwfilms.com` (after custom domain setup)
- **Preview:** `https://<project-name>.pages.dev`
- **Branch previews:** `https://<branch>.<project-name>.pages.dev`

## 🆘 Troubleshooting

### Build fails
- Check Node.js version is 20.11.0+
- Verify all dependencies are in package.json
- Check build logs in Cloudflare dashboard

### 404 errors
- Ensure build output directory is set to `out`
- Check that `output: 'export'` is in next.config.ts

### Images not loading
- Verify images are in `/public` directory
- Check image paths start with `/` (not `./`)

## 📞 Need Help?

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

