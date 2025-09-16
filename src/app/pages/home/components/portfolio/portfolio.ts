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

  // Signal references - initialized in ngOnInit
  titleSignal!: any;
  comingSoonSignal!: any;
  subtitleSignal!: any;

  ngOnInit(): void {
    // Initialize signal references after service is available
    this.titleSignal = this.translationService.translateSignal('portfolio.title');
    this.comingSoonSignal = this.translationService.translateSignal('portfolio.comingSoon');
    this.subtitleSignal = this.translationService.translateSignal('portfolio.subtitle');
  }
}
