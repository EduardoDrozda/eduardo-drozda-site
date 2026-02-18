import { Component, OnInit, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@core/services/translation.service';

interface PortfolioProject {
  id: string;
  titleSignal: Signal<string>;
  descriptionSignal: Signal<string>;
  desktopImage: string;
  desktopAltSignal: Signal<string>;
  techs: readonly string[];
  url: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements OnInit {
  // Inject service
  private translationService = inject(TranslationService);

  // Signal references - initialized in constructor
  titleSignal = this.translationService.translateSignal('portfolio.title');
  subtitleSignal = this.translationService.translateSignal('portfolio.subtitle');
  viewProjectSignal = this.translationService.translateSignal('portfolio.viewProject');
  tagsLabelSignal = this.translationService.translateSignal('portfolio.accessibility.tagsLabel');

  projects: PortfolioProject[] = [
    {
      id: 'ffadasabrina',
      titleSignal: this.translationService.translateSignal('portfolio.projects.ffadasabrina.title'),
      descriptionSignal: this.translationService.translateSignal('portfolio.projects.ffadasabrina.description'),
      desktopImage: '/images/projects/ffadasabrina_desktop.png',
      desktopAltSignal: this.translationService.translateSignal('portfolio.projects.ffadasabrina.desktopAlt'),
      techs: ['WordPress', 'PHP', 'CSS', 'jQuery'],
      url: 'https://ffadasabrina.com.br/'
    },
    {
      id: 'recruta-simples',
      titleSignal: this.translationService.translateSignal('portfolio.projects.recrutaSimples.title'),
      descriptionSignal: this.translationService.translateSignal('portfolio.projects.recrutaSimples.description'),
      desktopImage: '/images/projects/recruta-simples.png',
      desktopAltSignal: this.translationService.translateSignal('portfolio.projects.recrutaSimples.desktopAlt'),
      techs: ['NestJS', "Typescript", "NodeJS", "React"],
      url: 'https://www.recrutasimples.com.br/'
    }
  ];

  ngOnInit(): void {
    // Component initialization logic can go here if needed
  }
}
