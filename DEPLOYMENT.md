# Deployment Guide for Cloudflare Pages

This guide will help you deploy your BMMW Films website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account
- Your repository pushed to GitHub, GitLab, or Bitbucket

## Step-by-Step Deployment

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Login to Cloudflare**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to "Workers & Pages" from the left sidebar

2. **Create a New Project**
   - Click "Create application"
   - Select "Pages"
   - Click "Connect to Git"

3. **Connect Your Repository**
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Cloudflare to access your repositories
   - Select the `bmmw` repository

4. **Configure Build Settings**
   ```
   Project name: bmmw-films (or your preferred name)
   Production branch: main
   Build command: npm run build
   Build output directory: out
   ```

5. **Environment Variables** (if needed in the future)
   - You can add environment variables in the "Environment variables" section
   - For now, no environment variables are needed

6. **Deploy**
   - Click "Save and Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at `https://bmmw-films.pages.dev` (or similar)

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build Your Site**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   npx wrangler pages deploy out --project-name=bmmw-films
   ```

## Custom Domain

After deployment, you can add a custom domain:

1. Go to your Cloudflare Pages project
2. Click "Custom domains"
3. Click "Set up a custom domain"
4. Follow the instructions to configure your domain

## Automatic Deployments

Cloudflare Pages automatically deploys:
- **Production**: Every push to your `main` branch
- **Preview**: Every pull request creates a preview deployment

## Build Settings Reference

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |
| Node version | `18` or higher |

## Troubleshooting

### Build Fails

- Check that all dependencies are listed in `package.json`
- Ensure Node version is 18 or higher
- Review build logs for specific errors

### Pages Don't Load

- Verify the output directory is set to `out`
- Check that all routes are being generated (should see them in build logs)

### Images Not Loading

- Ensure images are in the `public` directory
- Use the correct paths: `/images/your-image.jpg`
- Remember that image optimization is disabled for static export

## Monitoring

Monitor your deployment:
- View analytics in Cloudflare dashboard
- Check build history
- Review deployment logs

## Need Help?

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

