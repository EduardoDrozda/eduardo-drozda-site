// Performance optimizations for SEO
export const PERFORMANCE_CONFIG = {
  // Image optimization
  IMAGE_FORMATS: ['webp', 'avif', 'jpg', 'png'],
  IMAGE_QUALITY: 85,
  IMAGE_SIZES: {
    hero: { width: 1200, height: 630 },
    about: { width: 400, height: 400 },
    icon: { width: 32, height: 32 }
  },

  // Lazy loading
  LAZY_LOADING_THRESHOLD: 0.1,
  INTERSECTION_OBSERVER_OPTIONS: {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  },

  // Preloading
  PRELOAD_RESOURCES: [
    '/images/me.jpeg',
    '/images/github.png',
    '/images/linkedin.png',
    '/images/file.png'
  ],

  // Critical CSS
  CRITICAL_CSS_SELECTORS: [
    '.hero',
    '.hero__title',
    '.hero__subtitle',
    '.hero__actions',
    '.header',
    '.header__logo',
    '.header__menu'
  ],

  // Font loading
  FONT_DISPLAY: 'swap',
  FONT_PRELOAD: [
    'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
  ],

  // Cache strategies
  CACHE_STRATEGIES: {
    static: 'max-age=31536000', // 1 year
    dynamic: 'max-age=3600',    // 1 hour
    api: 'max-age=300'          // 5 minutes
  },

  // Compression
  COMPRESSION_LEVEL: 6,
  MINIFY_OPTIONS: {
    html: true,
    css: true,
    js: true,
    images: true
  }
};

// SEO optimization utilities
export class SEOOptimizer {
  static optimizeImages(): void {
    // Add loading="lazy" to all images
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
  }

  static addAltTexts(): void {
    // Add alt texts to images without them
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      const src = img.getAttribute('src') || '';
      const alt = src.split('/').pop()?.split('.')[0] || 'Image';
      img.setAttribute('alt', alt);
    });
  }

  static optimizeHeadings(): void {
    // Ensure proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let currentLevel = 0;

    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > currentLevel + 1) {
        console.warn(`Heading hierarchy issue: ${heading.tagName} follows h${currentLevel}`);
      }
      currentLevel = level;
    });
  }

  static addSchemaMarkup(): void {
    // Add breadcrumb schema if not present
    if (!document.querySelector('script[type="application/ld+json"]')) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Eduardo Drozda Portfolio",
        "url": "https://eduardodrozda.com",
        "description": "Portfólio de Eduardo Drozda - Engenheiro de Software Full Stack"
      });
      document.head.appendChild(script);
    }
  }

  static optimizePerformance(): void {
    // Preload critical resources
    PERFORMANCE_CONFIG.PRELOAD_RESOURCES.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'image';
      document.head.appendChild(link);
    });

    // Add resource hints
    const domains = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com'];
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  }

  static runAllOptimizations(): void {
    this.optimizeImages();
    this.addAltTexts();
    this.optimizeHeadings();
    this.addSchemaMarkup();
    this.optimizePerformance();
  }
}
