# Development & Customization Tips

## Adding a New Section

Want to add more sections like testimonials or blog?

### Step 1: Create Component

Create a new file in `src/components/NewSection.tsx`:

```typescript
import React from 'react'
import { motion } from 'framer-motion'

const NewSection: React.FC = () => {
  return (
    <section id="new-section" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">New Section</h2>
        {/* Your content here */}
      </div>
    </section>
  )
}

export default NewSection
```

### Step 2: Import in App.tsx

```typescript
import NewSection from './components/NewSection'

// In JSX:
<NewSection />
```

### Step 3: Add to Navigation

Edit `src/components/Navigation.tsx` and add to navItems:

```typescript
{ name: 'New Section', to: 'new-section' }
```

---

## Customizing Animations

### Change Animation Speed

In component files, modify the `transition` property:

```typescript
// Slow animation
transition={{ duration: 1.0 }}

// Fast animation
transition={{ duration: 0.3 }}
```

### Change Animation Type

```typescript
// Fade only
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

// Slide from left
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}

// Scale up
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}

// Rotate
initial={{ rotate: -180 }}
animate={{ rotate: 0 }}
```

---

## Adding Project Gallery Images

### Step 1: Add Images

Place images in `public/images/`:
```
public/
├── images/
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
└── resume.pdf
```

### Step 2: Update Projects Component

In `src/components/Projects.tsx`, add image URL:

```typescript
projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    // ... other fields
    image: '/images/project1.jpg'  // Add this
  }
]
```

### Step 3: Display Image

```typescript
<img 
  src={project.image} 
  alt={project.title}
  className="w-full h-48 object-cover rounded-t-lg"
/>
```

---

## Changing Color Theme

### Update Tailwind Config

Edit `tailwind.config.js`:

```javascript
colors: {
  'primary-blue': '#2563eb',      // Your color
  'primary-purple': '#9333ea',    // Your color
  'secondary-cyan': '#0891b2',    // Your color
  'dark-bg': '#0f0f1e',
  'text-primary': '#ffffff',
  'text-secondary': '#a1a1aa',
}
```

### Apply to Components

Colors are used as class names:
```jsx
<div className="bg-primary-blue text-secondary-cyan">
  Colored content
</div>
```

---

## Adding a Blog Section

### Step 1: Create Blog Component

```typescript
interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  content: string
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  
  // Implementation...
}
```

### Step 2: Use Markdown

Install markdown library:
```powershell
npm install markdown-to-jsx
```

Import and use:
```typescript
import Markdown from 'markdown-to-jsx'

<Markdown>{post.content}</Markdown>
```

---

## Adding Dark/Light Mode Properly

Currently, the theme toggle is a placeholder. To make it functional:

### Step 1: Create Theme Context

Create `src/context/ThemeContext.tsx`:

```typescript
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext({
  isDark: true,
  toggle: () => {}
})

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  
  return (
    <ThemeContext.Provider value={{ isDark, toggle: () => setIsDark(!isDark) }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

### Step 2: Use in App

```typescript
import { ThemeProvider } from './context/ThemeContext'

<ThemeProvider>
  <Navigation isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
  {/* Rest of app */}
</ThemeProvider>
```

---

## Performance Optimization

### Code Splitting

Split large components:
```typescript
const Projects = lazy(() => import('./components/Projects'))

<Suspense fallback={<div>Loading...</div>}>
  <Projects />
</Suspense>
```

### Image Optimization

Use responsive images:
```typescript
<img 
  src="/images/project.jpg" 
  alt="project"
  loading="lazy"
  className="w-full h-auto"
/>
```

### Font Optimization

Add to `index.html` head:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
```

---

## Adding Form Validation

Enhance the contact form:

```typescript
const [errors, setErrors] = useState({})

const validateForm = () => {
  const newErrors: any = {}
  
  if (!formData.name.trim()) newErrors.name = 'Name is required'
  if (!formData.email.includes('@')) newErrors.email = 'Valid email required'
  if (formData.message.length < 10) newErrors.message = 'Message too short'
  
  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (validateForm()) {
    // Submit form
  }
}
```

---

## Adding Analytics

### Google Analytics

In `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your tracking ID.

---

## Testing Responsiveness

### Built-in DevTools

Press `F12` in browser, click device toolbar icon to test:
- Mobile (375px)
- Tablet (768px)
- Desktop (1024px)
- Large desktop (1280px)

### Tailwind Breakpoints

```
sm   640px
md   768px
lg   1024px
xl   1280px
2xl  1536px
```

Usage:
```jsx
<div className="text-sm md:text-lg lg:text-2xl">
  Responsive text
</div>
```

---

## Common Issues & Solutions

### CSS not updating
```bash
# Clear cache and rebuild
npm run build
```

### Components not rendering
```typescript
// Check import path
import MyComponent from './components/MyComponent'

// Use .tsx extension for TypeScript files
```

### Animation stuttering
```typescript
// Add will-change for better performance
<motion.div className="will-change-transform">
  Content
</motion.div>
```

### Form submission not working
```typescript
// Check form method and inputs
<form onSubmit={handleSubmit}>
  <input required name="email" type="email" />
</form>
```

---

## Useful Resources

- **React**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Vite**: https://vitejs.dev/

---

Happy customizing! 🚀
