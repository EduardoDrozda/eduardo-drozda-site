import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '@core/services/data.service';
import { Skill } from '@core/models/skill.model';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements OnInit, AfterViewInit {
  skills: Skill[] = [];
  animatedCards: Set<number> = new Set();

  @ViewChild('skillsGrid', { static: false }) skillsGrid!: ElementRef;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.getSkills().subscribe(skills => {
      this.skills = skills;
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
