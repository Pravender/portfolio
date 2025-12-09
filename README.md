# Pravender Kumar - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing expertise in Computer Vision, Machine Learning, and Optimization.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Dark Theme**: Elegant dark interface with purple and cyan accents
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Interactive Components**: Expandable experience cards, animated skills bars, project filters
- **Contact Form**: Fully functional contact section for inquiries
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **SEO Ready**: Meta tags, Open Graph tags, and semantic HTML
- **Professional Layout**: Clean, modern design reflecting engineering expertise

## 📋 Sections

1. **Hero Section**: Animated gradient background with typewriter effect
2. **About Section**: Professional biography and education timeline
3. **Experience Section**: Expandable cards showcasing professional roles and achievements
4. **Projects Section**: Filterable project grid with detailed descriptions
5. **Skills Section**: Interactive skill bars and frameworks showcase
6. **Awards Section**: Recognition and published research papers
7. **Contact Section**: Contact form and social media links
8. **Footer**: Quick navigation and social connections

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 10
- **Icons**: React Icons 4
- **Build Tool**: Vite 5
- **Node Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Navigation bar with mobile menu
│   │   ├── Hero.tsx            # Landing section
│   │   ├── About.tsx           # About and education
│   │   ├── Experience.tsx      # Professional experience timeline
│   │   ├── Projects.tsx        # Project showcase with filters
│   │   ├── Skills.tsx          # Technical skills and proficiencies
│   │   ├── Awards.tsx          # Awards and recognition
│   │   ├── Contact.tsx         # Contact form and info
│   │   └── Footer.tsx          # Footer section
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles and animations
├── public/
│   └── resume.pdf              # Resume file
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 🎨 Design System

### Color Scheme
- **Primary Blue**: `#1e3a8a`
- **Primary Purple**: `#7c3aed`
- **Secondary Cyan**: `#06b6d4`
- **Dark Background**: `#0f172a`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#94a3b8`

### Typography
- **Headings**: Poppins (Bold, 700)
- **Body**: Inter (Regular, 400)
- **Code**: Fira Code

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will auto-detect the Vite configuration
6. Click "Deploy"

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub account and select the repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### GitHub Pages

1. Update `vite.config.ts` to add base path
2. Run `npm run build`
3. Push the `dist` folder to gh-pages branch

## 📋 Customization

### Update Personal Information
Edit content in individual component files:
- Name and title in `Hero.tsx`
- Bio and education in `About.tsx`
- Experience details in `Experience.tsx`
- Projects in `Projects.tsx`
- Skills in `Skills.tsx`
- Contact info in `Contact.tsx`

### Add Resume
Place your resume PDF in the `public/` directory as `resume.pdf`

### Modify Colors
Update color values in `tailwind.config.js` theme section

### Change Animations
Adjust animation timings and variants in individual components or `index.css`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Optimizations

- Lazy loaded images and components
- Optimized animations with Framer Motion
- CSS purging with Tailwind
- Code splitting with Vite
- Minified production builds

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

For inquiries, please reach out:
- Email: kumarpravender1999@gmail.com
- Phone: +91 7983002393
- GitHub: https://github.com/Pravender
- LinkedIn: https://linkedin.com/in/pravender-kumar-213463193

---

Built with ❤️ by Pravender Kumar
