import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Header } from '@shared/components/header/header';
import { Footer } from '@shared/components/footer/footer';
import { Home } from '@pages/home/home';
import { SEOService } from '@core/services/seo.service';
import { GoogleAnalyticsService } from '@core/services/google-analytics.service';
import { TranslationService } from '@core/services/translation.service';
import { SEOOptimizer } from '@core/utils/seo-optimizer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(
    private seoService: SEOService,
    private googleAnalytics: GoogleAnalyticsService,
    private translationService: TranslationService,
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Initialize translation service
    this.translationService.initializeLanguage();

    // Initialize SEO
    this.initializeSEO();

    // Initialize Google Analytics only in browser
    if (typeof window !== 'undefined') {
      this.googleAnalytics.initialize();
      this.googleAnalytics.trackPageView(window.location.pathname);
      SEOOptimizer.runAllOptimizations();
    }
  }

  private initializeSEO(): void {
    // Set default SEO data
    this.seoService.updateSEO({
      title: 'Eduardo Drozda - Engenheiro de Software Full Stack | Desenvolvedor Angular, React, Node.js',
      description: 'Eduardo Drozda é um Engenheiro de Software Full Stack especializado em Angular, React, Node.js, PHP e C#. Desenvolvedor experiente com foco em soluções escaláveis e inovadoras.',
      keywords: 'Eduardo Drozda, Engenheiro de Software, Desenvolvedor Full Stack, Angular, React, Node.js, PHP, C#, TypeScript, JavaScript, Desenvolvedor Web, Programador, Frontend, Backend, Mobile',
      image: 'https://eduardodrozda.com/images/me.jpeg',
      url: 'https://eduardodrozda.com/',
      type: 'website'
    });

    // Add structured data
    this.seoService.addStructuredData(this.seoService.generatePersonSchema());
  }
}
