import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

export interface Translation {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = signal<string>('pt-BR');
  private translations = signal<Translation>({});

  private readonly defaultLanguage = 'pt-BR';
  private readonly supportedLanguages = ['pt-BR', 'en-US'];

  constructor(private http: HttpClient) {
    this.loadLanguage(this.defaultLanguage);
  }

  // Signal-based getters
  getCurrentLanguageSignal() {
    return this.currentLanguage.asReadonly();
  }

  getTranslationsSignal() {
    return this.translations.asReadonly();
  }

  getSupportedLanguages(): string[] {
    return this.supportedLanguages;
  }

  setLanguage(language: string): void {
    if (this.supportedLanguages.includes(language)) {
      this.currentLanguage.set(language);
      this.loadLanguage(language);

      if (typeof window !== 'undefined') {
        localStorage.setItem('preferred-language', language);
      }
    }
  }

  private loadLanguage(language: string): void {
    // Load translations in both browser and SSR
    this.http.get<Translation>(`/i18n/${language}.json`)
      .pipe(
        catchError(() => {
          console.warn(`Failed to load translations for ${language}, falling back to default`);
          return this.http.get<Translation>(`/i18n/${this.defaultLanguage}.json`);
        }),
        tap(translations => {
          this.translations.set(translations);
        })
      )
      .subscribe();
  }

  // Signal-based translation
  translateSignal(key: string, params?: { [key: string]: string | number }) {
    return computed(() => {
      const currentTranslations = this.translations();
      const value = this.getNestedValue(currentTranslations, key);

      if (typeof value === 'string') {
        return this.interpolate(value, params);
      }

      return key;
    });
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  }

  private interpolate(template: string, params?: { [key: string]: string | number }): string {
    if (!params) return template;

    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return params[key] !== undefined ? String(params[key]) : match;
    });
  }

  // Initialize language from localStorage
  initializeLanguage(): void {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferred-language');
      if (savedLanguage && this.supportedLanguages.includes(savedLanguage)) {
        this.setLanguage(savedLanguage);
      }
    }
  }

  // Get language display name
  getLanguageDisplayName(language: string): string {
    const displayNames: { [key: string]: string } = {
      'pt-BR': 'Português',
      'en-US': 'English'
    };
    return displayNames[language] || language;
  }

  // Get language flag emoji
  getLanguageFlag(language: string): string {
    const flags: { [key: string]: string } = {
      'pt-BR': '🇧🇷',
      'en-US': '🇺🇸'
    };
    return flags[language] || '🌐';
  }
}
