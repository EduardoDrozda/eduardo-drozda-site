import { Pipe, PipeTransform, computed, inject } from '@angular/core';
import { TranslationService } from '@core/services/translation.service';

@Pipe({
  name: 'translate',
  pure: false,
  standalone: true
})
export class TranslatePipe implements PipeTransform {
  // Inject service
  private translationService = inject(TranslationService);

  transform(key: string, params?: { [key: string]: string | number }): string {
    // Use signal-based translation for better performance in zoneless Angular
    const translationSignal = this.translationService.translateSignal(key, params);
    return translationSignal();
  }
}
