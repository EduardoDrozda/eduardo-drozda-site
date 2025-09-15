import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private readonly defaultTitle = 'Eduardo Drozda - Engenheiro de Software Full Stack';
  private readonly defaultDescription = 'Desenvolvedor Full Stack especializado em Angular, React, Node.js, PHP e C#. Experiência em desenvolvimento web e mobile com foco em soluções escaláveis e inovadoras.';
  private readonly defaultKeywords = 'Eduardo Drozda, Engenheiro de Software, Desenvolvedor Full Stack, Angular, React, Node.js, PHP, C#, TypeScript, JavaScript, Desenvolvedor Web, Programador, Frontend, Backend, Mobile';
  private readonly baseUrl = 'https://eduardodrozda.com';

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updateSEO(data: SEOData): void {
    const title = data.title || this.defaultTitle;
    const description = data.description || this.defaultDescription;
    const keywords = data.keywords || this.defaultKeywords;
    const image = data.image || `${this.baseUrl}/images/me.jpeg`;
    const url = data.url || this.baseUrl;
    const type = data.type || 'website';

    // Update title
    this.title.setTitle(title);

    // Update meta tags
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    // Update canonical URL
    this.updateCanonicalUrl(url);
  }

  private updateCanonicalUrl(url: string): void {
    let canonicalElement = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

    if (!canonicalElement) {
      canonicalElement = this.document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalElement);
    }

    canonicalElement.setAttribute('href', url);
  }

  updatePageTitle(section: string): void {
    const titles: { [key: string]: string } = {
      'hero': 'Eduardo Drozda - Engenheiro de Software Full Stack',
      'about': 'Sobre Eduardo Drozda - Engenheiro de Software',
      'skills': 'Habilidades Técnicas - Eduardo Drozda',
      'contact': 'Contato - Eduardo Drozda'
    };

    const title = titles[section] || this.defaultTitle;
    this.title.setTitle(title);
  }

  addStructuredData(data: any): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = 'structured-data';

    // Remove existing structured data
    const existingScript = this.document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    this.document.head.appendChild(script);
  }

  generateBreadcrumbSchema(items: Array<{name: string, url: string}>): any {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  }

  generatePersonSchema(): any {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Eduardo Drozda",
      "jobTitle": "Engenheiro de Software Full Stack",
      "description": this.defaultDescription,
      "url": this.baseUrl,
      "image": `${this.baseUrl}/images/me.jpeg`,
      "sameAs": [
        "https://github.com/eduardodrozda",
        "https://linkedin.com/in/eduardodrozda"
      ],
      "email": "contato@eduardodrozda.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR"
      },
      "knowsAbout": [
        "Angular", "React", "Next.js", "Node.js", "Express", "Nest.js",
        "PHP", "Laravel", "C#", ".NET", "TypeScript", "JavaScript",
        "HTML", "CSS", "SASS", "MySQL", "PostgreSQL", "Docker",
        "React Native", "Ionic"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Engenheiro de Software",
        "description": "Desenvolvimento de aplicações web e mobile full stack",
        "skills": [
          "Desenvolvimento Frontend", "Desenvolvimento Backend",
          "Desenvolvimento Mobile", "Arquitetura de Software",
          "Clean Code", "Design Patterns"
        ]
      }
    };
  }
}
