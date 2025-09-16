import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, computed, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@core/services/translation.service';
import { Skill } from '@core/models/skill.model';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements AfterViewInit {
  animatedCards: Set<number> = new Set();

  // Inject service
  private translationService = inject(TranslationService);

  // Signal-based translations
  titleSignal = this.translationService.translateSignal('skills.title');
  frontendSignal = this.translationService.translateSignal('skills.frontend.name');
  backendSignal = this.translationService.translateSignal('skills.backend.name');
  mobileSignal = this.translationService.translateSignal('skills.mobile.name');
  languagesSignal = this.translationService.translateSignal('skills.frontend.languages');
  frameworksSignal = this.translationService.translateSignal('skills.frontend.frameworks');

  // Stats translations
  areasOfExpertiseSignal = this.translationService.translateSignal('skills.stats.areasOfExpertise');
  technologiesSignal = this.translationService.translateSignal('skills.stats.technologies');
  projectsSignal = this.translationService.translateSignal('skills.stats.projects');

  skillsData = computed(() => {
    return [
      {
        id: 'frontend',
        name: this.translationService.translateSignal('skills.frontend.name')(),
        category: 'frontend' as const,
        languages: ['HTML', 'Javascript/TypeScript', 'CSS/SASS'],
        frameworks: ['Angular', 'React', 'Next'],
        icon: 'assets/icons/html5.svg',
        description: this.translationService.translateSignal('skills.frontend.description')()
      },
      {
        id: 'backend',
        name: this.translationService.translateSignal('skills.backend.name')(),
        category: 'backend' as const,
        languages: ['Javascript/TypeScript', 'PHP', 'C#'],
        frameworks: ['Node JS', 'Express', 'Nest JS', 'Laravel', '.NET', 'MySQL', 'Postgres', 'Docker', 'Docker Compose'],
        icon: 'assets/icons/backend.svg',
        description: this.translationService.translateSignal('skills.backend.description')()
      },
      {
        id: 'mobile',
        name: this.translationService.translateSignal('skills.mobile.name')(),
        category: 'mobile' as const,
        languages: ['Javascript/TypeScript'],
        frameworks: ['React Native', 'Ionic'],
        icon: 'assets/icons/mobile.svg',
        description: this.translationService.translateSignal('skills.mobile.description')()
      }
    ]
  });

  @ViewChild('skillsGrid', { static: false }) skillsGrid!: ElementRef;

  constructor() {
    effect(() => {
      this.skillsData();
    });
  }

  ngAfterViewInit(): void {
    // Only setup IntersectionObserver in browser
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.setupIntersectionObserver();
    }
  }

  private setupIntersectionObserver(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cardIndex = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
          if (cardIndex !== -1) {
            this.animatedCards.add(cardIndex);
          }
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observar cada card individualmente
    setTimeout(() => {
      const cards = this.skillsGrid?.nativeElement?.querySelectorAll('.skills__card');
      cards?.forEach((card: Element) => {
        observer.observe(card);
      });
    }, 100);
  }

  isCardAnimated(index: number): boolean {
    return this.animatedCards.has(index);
  }

  getSkillIcon(skillId: string): string {
    switch (skillId) {
      case 'frontend':
        return 'svgs/html.svg';
      case 'backend':
        return 'svgs/backend.svg';
      case 'mobile':
        return 'svgs/mobile.svg';
      default:
        return 'svgs/html.svg';
    }
  }
}
