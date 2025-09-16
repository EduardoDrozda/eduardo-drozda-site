import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@core/services/translation.service';

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
  comingSoonSignal = this.translationService.translateSignal('portfolio.comingSoon');
  subtitleSignal = this.translationService.translateSignal('portfolio.subtitle');

  ngOnInit(): void {
    // Component initialization logic can go here if needed
  }
}
