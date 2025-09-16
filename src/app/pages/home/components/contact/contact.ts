import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService, ContactFormData } from '@core/services/contact.service';
import { TranslationService } from '@core/services/translation.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {
  formData: ContactFormData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  isSubmitted = false;
  errorMessage = '';

  // Temporarily disable form
  isFormDisabled = true;

  // Inject services
  private contactService = inject(ContactService);
  private translationService = inject(TranslationService);

  // Signal-based translations
  titleSignal = this.translationService.translateSignal('contact.title');
  descriptionSignal = this.translationService.translateSignal('contact.subtitle');
  nameSignal = this.translationService.translateSignal('contact.form.name');
  emailSignal = this.translationService.translateSignal('contact.form.email');
  messageSignal = this.translationService.translateSignal('contact.form.message');
  sendSignal = this.translationService.translateSignal('contact.form.send');
  sendingSignal = this.translationService.translateSignal('contact.form.sending');
  successSignal = this.translationService.translateSignal('contact.form.success');
  successMessageSignal = this.translationService.translateSignal('contact.form.successMessage');
  sendNewMessageSignal = this.translationService.translateSignal('contact.form.sendNewMessage');
  errorSignal = this.translationService.translateSignal('contact.form.error');

  // Placeholder translations
  namePlaceholderSignal = this.translationService.translateSignal('contact.form.placeholders.name');
  emailPlaceholderSignal = this.translationService.translateSignal('contact.form.placeholders.email');
  messagePlaceholderSignal = this.translationService.translateSignal('contact.form.placeholders.message');

  // Accessibility translations
  nameFieldAriaSignal = this.translationService.translateSignal('contact.form.accessibility.nameField');
  emailFieldAriaSignal = this.translationService.translateSignal('contact.form.accessibility.emailField');
  messageFieldAriaSignal = this.translationService.translateSignal('contact.form.accessibility.messageField');
  errorMessageAriaSignal = this.translationService.translateSignal('contact.form.accessibility.errorMessage');
  sendingMessageAriaSignal = this.translationService.translateSignal('contact.form.accessibility.sendingMessage');
  sendMessageAriaSignal = this.translationService.translateSignal('contact.form.accessibility.sendMessage');

  // Disabled form translations
  disabledTitleSignal = this.translationService.translateSignal('contact.form.disabled.title');
  disabledMessageSignal = this.translationService.translateSignal('contact.form.disabled.message');

  // Contact info translations
  emailInfoSignal = this.translationService.translateSignal('contact.info.email');
  locationSignal = this.translationService.translateSignal('contact.info.location');
  availabilitySignal = this.translationService.translateSignal('contact.info.availability');
  responseTimeSignal = this.translationService.translateSignal('contact.info.responseTime');
  statusSignal = this.translationService.translateSignal('contact.info.status');
  languagesSignal = this.translationService.translateSignal('contact.info.languages');

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.isSubmitting) return;

    // Validação básica
    if (!this.formData.name.trim() || !this.formData.email.trim() || !this.formData.message.trim()) {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      return;
    }

    if (!this.isValidEmail(this.formData.email)) {
      this.errorMessage = 'Por favor, insira um email válido.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    this.contactService.sendMessage(this.formData).subscribe({
      next: (response) => {
        this.isSubmitted = true;
        this.isSubmitting = false;
        console.log('Mensagem enviada:', response);
      },
      error: (error) => {
        this.errorMessage = 'Erro ao enviar mensagem. Tente novamente.';
        this.isSubmitting = false;
        console.error('Erro:', error);
      }
    });
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm(): void {
    this.formData = { name: '', email: '', message: '' };
    this.isSubmitted = false;
    this.errorMessage = '';
  }
}
