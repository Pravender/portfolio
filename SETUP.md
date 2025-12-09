# Pravender Kumar's Portfolio Website

## Setup Instructions

### 1. Install Node.js and npm

If you haven't already installed Node.js:
- Download from: https://nodejs.org/
- Install the LTS version
- Verify installation by running in PowerShell:
  ```powershell
  node --version
  npm --version
  ```

### 2. Install Project Dependencies

Open PowerShell in the portfolio directory and run:
```powershell
npm install
```

This will install all required dependencies listed in package.json:
- React 18.3
- Framer Motion (animations)
- React Icons (UI icons)
- Tailwind CSS (styling)
- Vite (build tool)
- And more...

### 3. Run Development Server

```powershell
npm run dev
```

The website will automatically open in your browser at `http://localhost:3000`

### 4. Build for Production

```powershell
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 5. Preview Production Build

```powershell
npm run preview
```

## Project Features

✅ Fully Responsive Design
✅ Dark Theme with Modern UI
✅ Smooth Animations
✅ Expandable Experience Cards
✅ Project Filtering
✅ Interactive Skills Visualization
✅ Contact Form
✅ Social Media Integration
✅ SEO Optimized
✅ Production Ready

## File Structure

```
portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Awards.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx            # Main app
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/
│   └── resume.pdf         # Your resume
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.ts         # Vite config
├── tailwind.config.js     # Tailwind config
└── README.md              # Documentation
```

## Customization Guide

### 1. Update Personal Information

Edit `src/components/Hero.tsx`:
- Change name to "Pravender Kumar"
- Update title and tagline

Edit `src/components/About.tsx`:
- Update bio and education details

Edit `src/components/Contact.tsx`:
- Update email and phone number

### 2. Add Resume

1. Save your resume as `resume.pdf`
2. Place it in the `public/` folder
3. The "Download Resume" button will work automatically

### 3. Update Social Links

Edit `src/components/Navigation.tsx` and `src/components/Hero.tsx`:
- Replace GitHub URL
- Replace LinkedIn URL
- Update email address

### 4. Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'primary-blue': '#1e3a8a',
  'primary-purple': '#7c3aed',
  'secondary-cyan': '#06b6d4',
  // ... update colors here
}
```

### 5. Modify Experience/Projects

Edit `src/components/Experience.tsx` and `src/components/Projects.tsx`:
- Update job titles and companies
- Add your actual projects
- Update technologies used

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Select your GitHub repo
5. Click "Deploy"

Vercel automatically detects Vite and deploys for free!

### Deploy to Netlify

1. Push code to GitHub
2. Go to netlify.com
3. Click "New site from Git"
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy"

## Available Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Port 3000 already in use?
Edit `vite.config.ts` and change the port number.

### Dependencies not installing?
Try clearing npm cache:
```powershell
npm cache clean --force
npm install
```

### Build errors?
Make sure all TypeScript files are in the `src/` folder.

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Update your info in components
4. ✅ Add resume PDF to public folder
5. ✅ Test locally
6. ✅ Build: `npm run build`
7. ✅ Deploy to Vercel or Netlify

## Support

For issues or questions:
- Check the README.md file
- Review component files for inline comments
- Visit Vite docs: https://vitejs.dev
- Visit Tailwind docs: https://tailwindcss.com
- Visit React docs: https://react.dev

Enjoy your new portfolio website! 🚀
