import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  private readonly GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Substitua pelo seu ID do Google Analytics

  constructor(@Inject(DOCUMENT) private document: Document) {}

  initialize(): void {
    // Carrega o script do Google Analytics
    const script1 = this.document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA_TRACKING_ID}`;
    this.document.head.appendChild(script1);

    // Configura o gtag
    const script2 = this.document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${this.GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    this.document.head.appendChild(script2);
  }

  trackPageView(url: string): void {
    if (typeof gtag !== 'undefined') {
      gtag('config', this.GA_TRACKING_ID, {
        page_path: url,
        page_title: this.document.title,
        page_location: window.location.href
      });
    }
  }

  trackEvent(eventName: string, parameters?: any): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
    }
  }

  trackButtonClick(buttonName: string, section?: string): void {
    this.trackEvent('button_click', {
      button_name: buttonName,
      section: section || 'unknown',
      page_location: window.location.href
    });
  }

  trackDownload(fileName: string): void {
    this.trackEvent('file_download', {
      file_name: fileName,
      page_location: window.location.href
    });
  }

  trackExternalLink(url: string, linkText: string): void {
    this.trackEvent('external_link_click', {
      link_url: url,
      link_text: linkText,
      page_location: window.location.href
    });
  }

  trackScroll(depth: number): void {
    this.trackEvent('scroll', {
      scroll_depth: depth,
      page_location: window.location.href
    });
  }

  trackTimeOnPage(timeInSeconds: number): void {
    this.trackEvent('time_on_page', {
      time_in_seconds: timeInSeconds,
      page_location: window.location.href
    });
  }
}
