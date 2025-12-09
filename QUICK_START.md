# Quick Reference Card

## 🚀 Get Started in 5 Minutes

### 1. Install Node.js
Download from: https://nodejs.org/ (LTS version)

### 2. Install Dependencies
```powershell
npm install
```

### 3. Start Development
```powershell
npm run dev
```

### 4. Open Browser
Visit: http://localhost:3000

---

## 📁 File Locations Quick Guide

| What to Change | File Location |
|---|---|
| Name & Title | `src/components/Hero.tsx` |
| About Bio | `src/components/About.tsx` |
| Experience | `src/components/Experience.tsx` |
| Projects | `src/components/Projects.tsx` |
| Skills | `src/components/Skills.tsx` |
| Contact Info | `src/components/Contact.tsx` |
| Colors | `tailwind.config.js` |
| Fonts | `src/index.css` |
| Resume File | `public/resume.pdf` |

---

## 🎨 Custom Colors Quick Reference

Edit in `tailwind.config.js`:

```javascript
colors: {
  'primary-blue': '#1e3a8a',      // Main blue
  'primary-purple': '#7c3aed',    // Main purple
  'secondary-cyan': '#06b6d4',    // Accent cyan
  'dark-bg': '#0f172a',           // Background
  'text-primary': '#ffffff',      // Main text
  'text-secondary': '#94a3b8',    // Secondary text
}
```

---

## ⚡ Common Commands

```powershell
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Update dependencies
npm update

# Clear cache if issues
npm cache clean --force
npm install
```

---

## 🔗 Social Links to Update

**File**: `src/components/Hero.tsx` (and Footer.tsx)

```
GitHub: https://github.com/YOUR_USERNAME
LinkedIn: https://linkedin.com/in/YOUR_PROFILE
Email: your.email@example.com
```

---

## 📝 Component Structure

```
Hero.tsx          → Landing page section
↓
About.tsx         → About & education
↓
Experience.tsx    → Job experience
↓
Projects.tsx      → Portfolio projects
↓
Skills.tsx        → Technical skills
↓
Awards.tsx        → Achievements
↓
Contact.tsx       → Contact form
↓
Footer.tsx        → Footer
```

---

## 🎯 Deployment Options

| Platform | Ease | Cost | Setup |
|---|---|---|---|
| **Vercel** | ⭐⭐⭐⭐⭐ | FREE | 2 min |
| **Netlify** | ⭐⭐⭐⭐⭐ | FREE | 2 min |
| **GitHub Pages** | ⭐⭐⭐⭐ | FREE | 5 min |

---

## 📦 Dependencies

```json
{
  "react": "18.3.1",
  "react-dom": "18.3.1",
  "framer-motion": "10.16.16",
  "react-icons": "4.13.0",
  "react-scroll": "1.9.0",
  "tailwindcss": "3.4.1"
}
```

---

## 💡 Quick Customization Tips

### Change Hero Text
```typescript
// In Hero.tsx
<h1>Your Name Here</h1>
<h2>Your Title Here</h2>
```

### Change Section Colors
```jsx
// Use these classes
className="bg-dark-bg"        // Dark background
className="text-secondary-cyan" // Cyan text
className="bg-primary-purple" // Purple background
```

### Add New Section
1. Create component in `src/components/`
2. Import in `App.tsx`
3. Add to Navigation menu
4. Add ID matching nav item

### Update Project
Open `src/components/Projects.tsx`:
```typescript
{
  title: 'Your Project Name',
  description: 'What it does',
  techStack: ['Tech1', 'Tech2'],
  // ... etc
}
```

---

## 🐛 Troubleshooting Quick Fix

| Issue | Solution |
|---|---|
| Port 3000 in use | Change port in `vite.config.ts` |
| Styles not loading | Run `npm run build` |
| Dependencies missing | Run `npm install` |
| Build fails | Delete `node_modules`, run `npm install` |
| Module not found | Check file path & .tsx extension |

---

## 📚 File Structure at a Glance

```
portfolio/
├── src/
│   ├── components/        ← Edit these files
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Awards.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx            ← Main component
│   ├── main.tsx           ← Entry point
│   └── index.css          ← Global styles
├── public/                ← Static files
│   └── resume.pdf         ← Your resume here
├── index.html             ← HTML template
├── package.json           ← Dependencies
├── tailwind.config.js     ← Tailwind settings
├── vite.config.ts         ← Vite settings
└── README.md              ← Documentation
```

---

## 🚀 Deploy in 3 Steps

### Vercel
1. Push code to GitHub
2. Go to vercel.com
3. Select repository → Deploy

### Netlify
1. Push code to GitHub
2. Go to netlify.com
3. Select repository → Deploy

### GitHub Pages
1. Edit `vite.config.ts` → add `base: '/portfolio/'`
2. Run `npm run build`
3. Enable Pages in GitHub settings

---

## 📱 Responsive Breakpoints

```
Mobile:   < 640px  (sm)
Tablet:   768px    (md)
Desktop:  1024px   (lg)
Large:    1280px   (xl)
```

---

## 🎓 Learning Resources

- React Docs: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- TypeScript: https://www.typescriptlang.org/docs/

---

## ✅ Pre-Deployment Checklist

- [ ] Updated all personal information
- [ ] Added resume to `public/` folder
- [ ] Updated social media links
- [ ] Tested on mobile devices
- [ ] Built successfully: `npm run build`
- [ ] No console errors
- [ ] All images load correctly
- [ ] Contact form works
- [ ] All links work

---

**You're all set! Start with `npm install` then `npm run dev`** 🎉
