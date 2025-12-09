# Deployment Guide

Complete instructions for deploying your portfolio website to the internet.

## Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest and free option. Perfect for Vite + React projects.

### Step 1: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click "+" → "New repository"
3. Name it: `portfolio`
4. Select "Public"
5. Click "Create repository"

### Step 2: Push Code to GitHub

In PowerShell, navigate to your portfolio folder:

```powershell
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Sign up" → Use GitHub account
3. Authorize Vercel to access GitHub
4. Click "Import Project"
5. Select your "portfolio" repository
6. Vercel auto-detects Vite settings
7. Click "Deploy"

**Your site is now live!** Vercel will give you a URL like: `portfolio-123.vercel.app`

### Add Custom Domain (Optional)

In Vercel dashboard:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS setup instructions

---

## Option 2: Deploy to Netlify

Another great free hosting option.

### Step 1: Push to GitHub

Follow the GitHub steps above.

### Step 2: Deploy to Netlify

1. Go to https://netlify.com
2. Click "Sign up" → Use GitHub
3. Authorize Netlify
4. Click "Add new site" → "Import an existing project"
5. Select GitHub → Choose your portfolio repo
6. Configure settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"

**Your site is live!** Netlify provides a temporary URL.

### Add Custom Domain

1. Click "Site settings"
2. Go to "Domain management"
3. Add your custom domain
4. Update DNS settings

---

## Option 3: Deploy to GitHub Pages

Free hosting directly from GitHub.

### Step 1: Update Vite Config

Edit `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // Add this line
  server: {
    port: 3000,
    open: true
  }
})
```

### Step 2: Build and Deploy

```powershell
npm run build
git add .
git commit -m "Build for GitHub Pages"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your GitHub repository
2. Click "Settings"
3. Scroll to "Pages"
4. Select "Deploy from a branch"
5. Choose branch: `main`
6. Choose folder: `dist`
7. Click "Save"

Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio/`

---

## Update Your Portfolio After Deployment

After deployment, if you want to update your portfolio:

1. Make changes locally
2. Commit and push to GitHub:
   ```powershell
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. Vercel/Netlify will auto-deploy your changes
4. Updates typically live within 1-2 minutes

---

## Performance Tips

### 1. Optimize Images
- Use compressed images
- Consider lazy loading for projects

### 2. Enable Caching
On Netlify/Vercel, caching is automatic

### 3. Monitor Performance
- Vercel: Built-in analytics
- Netlify: Enable analytics in settings
- Google PageSpeed Insights: https://pagespeed.web.dev/

---

## Custom Domain Setup

### Purchase Domain
- Namecheap
- GoDaddy
- Google Domains
- Hostinger

### Point Domain to Hosting

**For Vercel:**
1. In Vercel dashboard, go to project settings
2. Add domain
3. Update DNS records to Vercel nameservers

**For Netlify:**
1. In Netlify, go to domain settings
2. Add custom domain
3. Update domain registrar's nameservers

---

## Environment Variables (If Needed)

Create a `.env` file in your project root:

```
VITE_API_URL=https://api.example.com
```

Access in components:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Troubleshooting

### Site shows 404
- Check base path in vite.config.ts
- Rebuild: `npm run build`
- Clear browser cache

### Styling looks broken
- Ensure Tailwind CSS is built correctly
- Check that all CSS imports are present
- Rebuild: `npm run build`

### Images not loading
- Use relative paths from public folder
- Or use absolute URLs

### Build fails on deployment
- Check Node version requirements
- Ensure all dependencies are in package.json
- Check build logs on hosting platform

---

## Security Tips

1. **Keep dependencies updated**
   ```powershell
   npm update
   ```

2. **Use HTTPS** (automatically on Vercel/Netlify)

3. **Protect sensitive data**
   - Never commit API keys
   - Use environment variables
   - Don't commit secrets in code

---

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel or Netlify
3. ✅ Test your live site
4. ✅ Share your portfolio!

Congratulations! Your portfolio is now live on the internet! 🚀
