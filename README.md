# Eduardo Drozda Portfolio Website

A modern, responsive portfolio site built with Angular. The visual language embraces a cyberpunk/terminal aesthetic featuring a dark theme, neon accents, and polished micro-interactions.

## 🚀 Highlights

- **Cyberpunk UI** – Dark theme, neon colors, terminal-inspired details
- **Fully Responsive** – Optimized for mobile, tablet, and desktop
- **Smooth Navigation** – Scroll behavior with offset for the fixed header
- **Immersive Animations** – Matrix rain, typewriting, neon pulse, bounce, and more
- **Mobile Menu** – Animated hamburger navigation
- **Downloadable Resume** – Button wired to the hosted PDF
- **SEO-Friendly** – Semantic structure with accessibility in mind

## 📁 Project Structure

```
src/app/
├── core/                    # Core functionality
│   ├── models/              # Interfaces (Skill, PersonalInfo, ContactInfo)
│   └── services/            # Services (DataService, NavigationService)
├── pages/
│   └── home/                # Landing page
│       ├── components/      # Home page sections
│       │   ├── hero/        # Hero with typewriting effect
│       │   ├── about/       # About section with photo and code snippet
│       │   ├── skills/      # Skills grid with chips
│       │   └── contact/     # Contact information & form
│       └── enums/           # Enumerations (SectionEnum)
└── shared/                  # Shared components
    └── components/
        └── header/          # Header navigation and mobile menu
```

## 🛠️ Tech Stack

- **Angular 20** – Front-end framework
- **TypeScript** – Application language
- **SCSS** – Styling with custom variables and mixins
- **Font Awesome** – Iconography
- **Google Fonts** – Typography (Source Code Pro, Inter)

## 🎨 Design System

### Colors
- **Matrix Green** – `#00ff41`
- **Cyber Blue** – `#00d4ff`
- **Matrix Dark** – `#0a0a0a`
- **Code Background** – `#1a1a1a`

### Typography
- **Primary Font** – Source Code Pro (monospace)
- **Secondary Font** – Inter (sans-serif)

### Motion & Effects
- **Neon Pulse** – Glow animation for accent elements
- **Matrix Rain** – Animated background in the hero
- **Typewriting** – Intro title animation
- **Bounce** – Scroll-down indicator animation

## 📦 Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd eduardo-drozda-site
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```
4. Open `http://localhost:4200` in the browser.

## 🎯 Key Features

### Hero
- Typewriting headline (“SOFTWARE ENGINEER”)
- Matrix rain highlighting technologies
- Action buttons (GitHub, LinkedIn, Download CV)
- Scroll-down cue with animation

### About
- Responsive layout with reordered content on mobile
- Professional photo with hover effects
- Creative JavaScript snippet about the author
- Highlighted stats (years of experience, lines of code)
- Inspiring quote

### Skills
- Technology chips grouped by category
- Categories: Front-end, Back-end, Mobile
- Animated cards on scroll
- “Terminal” style stats panel

### Header
- Smooth-scrolling navigation with active section detection
- Animated hamburger menu for mobile
- Hover animation on the logotype

## 📱 Responsiveness

Breakpoints:
- **Mobile** – up to 767px
- **Tablet** – 768px to 1023px  
- **Desktop** – 1024px and above

Mobile tweaks include the hamburger menu, stacked skill cards, reordered About content, and centered scroll-down indicator.

## 🔧 Customization

### Updating Content

1. **Personal Info** – Edit `src/app/core/services/data.service.ts`  
   Name, title, bio, experience, contact data

2. **Skills** – Update the skills array in the same file  
   Categories, technologies, descriptions

3. **Assets** – Replace images in `public/images/`  
   - `me.jpeg` – Profile photo  
   - `github.png`, `linkedin.png`, `file.png` – Action button icons

### Styling Tweaks

1. **Colors** – Adjust CSS variables in `src/styles.scss`
2. **Animations** – Tune durations and keyframes inside SCSS files
3. **Layout** – Modify grid/flex configurations per component

## 📄 Static Assets

- **Resume** – `public/files/Curriculo Eduardo Fullstack - PT.pdf`
- **Icons** – `public/images/`
- **SVGs** – `public/svgs/`

## 🔍 SEO & Optimizations

- Optimized meta tags (title, description, Open Graph, Twitter Cards, canonical)
- Structured data with Schema.org (Person, Breadcrumb, Occupation, Skills, JSON-LD)
- Performance tuning: lazy image loading, critical resource preload, DNS prefetch, compression, minification, optional service worker
- Accessibility: alternative text, ARIA labels/roles, heading hierarchy, keyboard navigation, color contrast
- Analytics: Google Analytics 4 integration, custom events, performance and conversion reports

## 🚀 Deployment

1. Build for production:
   ```bash
   npm run build
   ```
2. Deploy the output from `dist/eduardo-drozda-site/` to your hosting provider.

### Post-Deployment Checklist

1. **Google Search Console** – Add and verify the property, submit the sitemap.
2. **Google Analytics** – Configure GA4 and update `GA_TRACKING_ID` in `GoogleAnalyticsService`.
3. **SEO Verification** – Run Lighthouse/PageSpeed Insights, test structured data (Rich Results Test), validate accessibility (axe-core).

## 🎮 Interactions

- Hover effects across interactive elements
- Smooth scrolling between sections
- Animated mobile navigation
- Direct CV download
- External links opening in new tabs

## 📞 Contact

- **Email** – contato@eduardodrozda.com
- **LinkedIn** – [Eduardo Drozda](https://linkedin.com/in/eduardodrozda)
- **GitHub** – [eduardodrozda](https://github.com/eduardodrozda)

## 📄 License

This project is the property of Eduardo Drozda.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

**Built with ❤️ by Eduardo Drozda**
