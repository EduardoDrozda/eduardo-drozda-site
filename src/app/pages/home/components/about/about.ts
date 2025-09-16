import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@core/services/translation.service';
import { Nl2brPipe } from '@shared/pipes/nl2br-pipe';

@Component({
  selector: 'app-about',
  imports: [CommonModule, Nl2brPipe],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  // Inject service
  private translationService = inject(TranslationService);

  // Signal-based translations
  titleSignal = this.translationService.translateSignal('about.title');
  descriptionSignal = this.translationService.translateSignal('about.description');
  description2Signal = this.translationService.translateSignal('about.description2');
  description3Signal = this.translationService.translateSignal('about.description3');
  experienceSignal = this.translationService.translateSignal('about.experience');
  linesOfCodeSignal = this.translationService.translateSignal('about.linesOfCode');
  quoteSignal = this.translationService.translateSignal('about.quote');
  quoteAuthorSignal = this.translationService.translateSignal('about.quoteAuthor');

  // Code snippet translations
  codeNameSignal = this.translationService.translateSignal('about.codeSnippet.name');
  codeExperienceSignal = this.translationService.translateSignal('about.codeSnippet.experience');
  codeSpecializationSignal = this.translationService.translateSignal('about.codeSnippet.specialization');
  codePassionSignal = this.translationService.translateSignal('about.codeSnippet.passion');
  codeMissionSignal = this.translationService.translateSignal('about.codeSnippet.mission');
  codeCoffeeSignal = this.translationService.translateSignal('about.codeSnippet.coffeeConsumption');
  codeBugsSignal = this.translationService.translateSignal('about.codeSnippet.bugsFixed');

  ngOnInit(): void {
    // Component initialization
  }
}
