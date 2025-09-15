import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService, ContactFormData } from '../../../core/services/contact.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm implements OnInit {
  formData: ContactFormData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  isSubmitted = false;
  isDarkMode = false;
  errorMessage = '';

  constructor(
    private contactService: ContactService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

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
