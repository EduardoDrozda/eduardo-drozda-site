import { Component, OnInit, signal, WritableSignal, inject, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@core/services/translation.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit {
  matrixTexts: string[] = [];
  private typingTimer: any = null;

  displayedText: WritableSignal<string> = signal('');
  isTyping: WritableSignal<boolean> = signal(false);

  private translationService = inject(TranslationService);

  titleText = 'SOFTWARE ENGINEER';
  greetingSignal = this.translationService.translateSignal('hero.greeting');
  subtitleSignal = this.translationService.translateSignal('hero.subtitle');

  // Accessibility translations
  mainSectionAriaSignal = this.translationService.translateSignal('hero.accessibility.mainSection');
  greetingAriaSignal = this.translationService.translateSignal('hero.accessibility.greeting');
  softwareEngineerAriaSignal = this.translationService.translateSignal('hero.accessibility.softwareEngineer');
  actionLinksAriaSignal = this.translationService.translateSignal('hero.accessibility.actionLinks');
  githubProfileAriaSignal = this.translationService.translateSignal('hero.accessibility.githubProfile');
  linkedinProfileAriaSignal = this.translationService.translateSignal('hero.accessibility.linkedinProfile');
  downloadResumeAriaSignal = this.translationService.translateSignal('hero.accessibility.downloadResume');

  constructor() {
    this.initializeMatrixTexts();
    afterNextRender(() => {
      this.startTypewriting();
    });
  }

  ngOnInit(): void {
    // Component initialization logic can go here if needed
  }

  private initializeMatrixTexts(): void {
    const techKeywords = [
      'ANGULAR', 'REACT', 'VUE', 'TYPESCRIPT', 'JAVASCRIPT', 'PYTHON', 'JAVA', 'NODEJS',
      'HTML5', 'CSS3', 'SCSS', 'WEBPACK', 'VITE', 'DOCKER', 'KUBERNETES', 'AWS',
      'MONGODB', 'POSTGRESQL', 'MYSQL', 'REDIS', 'GIT', 'GITHUB', 'JENKINS', 'DEVOPS',
      'API', 'REST', 'GRAPHQL', 'MICROSERVICES', 'AGILE', 'SCRUM', 'TESTING', 'CYBERSECURITY'
    ];

    for (let i = 0; i < 100; i++) {
      this.matrixTexts.push(techKeywords[i % techKeywords.length]);
    }
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'files/Curriculo Eduardo Fullstack - PT.pdf';
    link.download = 'Curriculo Eduardo Fullstack - PT.pdf';
    link.click();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  getMatrixText(index: number): string {
    return this.matrixTexts[index - 1] || 'ANGULAR';
  }

  private clearTypingTimer(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
      this.typingTimer = null;
    }
    this.isTyping.set(false);
  }

  private startTypewriting(): void {
    this.isTyping.set(true);
    this.displayedText.set('');

    let currentIndex = 0;
    const typingSpeed = 100;

    const typeNextCharacter = () => {
      if (currentIndex < this.titleText.length) {
        this.displayedText.update(text => text + this.titleText[currentIndex]);
        currentIndex++;
        this.typingTimer = setTimeout(typeNextCharacter, typingSpeed);
      } else {
        this.isTyping.set(false);
        this.typingTimer = null;
      }
    };

    typeNextCharacter();
  }
}
