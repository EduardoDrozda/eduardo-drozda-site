import { Component, OnInit, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@core/services/translation.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss'
})
export class LanguageSelector implements OnInit {
  currentLanguage = signal('pt-BR');
  supportedLanguages: string[] = [];

  // Inject service
  private translationService = inject(TranslationService);

  constructor() {
    // Initialize with current language
    this.currentLanguage.set(this.translationService.getCurrentLanguageSignal()());

    // Use effect to watch for language changes
    effect(() => {
      const language = this.translationService.getCurrentLanguageSignal()();
      this.currentLanguage.set(language);
    });
  }

  ngOnInit(): void {
    this.supportedLanguages = this.translationService.getSupportedLanguages();
  }

  toggleLanguage(): void {
    const currentIndex = this.supportedLanguages.indexOf(this.currentLanguage());
    const nextIndex = (currentIndex + 1) % this.supportedLanguages.length;
    const nextLanguage = this.supportedLanguages[nextIndex];

    this.translationService.setLanguage(nextLanguage);
  }

  getLanguageDisplayName(language: string): string {
    return this.translationService.getLanguageDisplayName(language);
  }

  getLanguageFlag(language: string): string {
    return this.translationService.getLanguageFlag(language);
  }

  getLanguageCode(language: string): string {
    const codes: { [key: string]: string } = {
      'pt-BR': 'PT',
      'en-US': 'EN'
    };
    return codes[language] || language;
  }

  getOtherLanguageDisplayName(): string {
    const currentIndex = this.supportedLanguages.indexOf(this.currentLanguage());
    const nextIndex = (currentIndex + 1) % this.supportedLanguages.length;
    const nextLanguage = this.supportedLanguages[nextIndex];
    return this.getLanguageDisplayName(nextLanguage);
  }
}
