import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@core/services/translation.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {
  currentYear = new Date().getFullYear();

  // Inject services
  private translationService = inject(TranslationService);

  // Signal-based translations
  copyrightSignal = this.translationService.translateSignal('footer.developedBy');
  titleSignal = this.translationService.translateSignal('footer.title');
  specialtySignal = this.translationService.translateSignal('footer.specialty');

  ngOnInit(): void {
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'files/Curriculo Eduardo Fullstack - PT.pdf';
    link.download = 'Curriculo Eduardo Fullstack - PT.pdf';
    link.click();
  }
}
