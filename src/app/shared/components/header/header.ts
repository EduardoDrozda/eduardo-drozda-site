import { Component, OnInit, HostListener, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '@core/services/navigation.service';
import { SectionEnum } from '@pages/home/enums/section.enum';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  isMenuOpen = false;
  sections = SectionEnum;
  activeSection: WritableSignal<SectionEnum> = signal(SectionEnum.HERO);

  constructor(
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  updateActiveSection(): void {
    if (typeof window === 'undefined') return;

    const sections = [this.sections.HERO, this.sections.ABOUT, this.sections.SKILLS, this.sections.CONTACT];
    const scrollPosition = window.scrollY + 180;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSection.set(section);
          break;
        } else {
          this.activeSection.set(SectionEnum.HERO);
        }
      }
    }
  }

  isActive(section: SectionEnum): boolean {
    return this.activeSection() === section;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToSection(section: SectionEnum, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.navigationService.navigateToSection(section);
    this.isMenuOpen = false;
  }
}
