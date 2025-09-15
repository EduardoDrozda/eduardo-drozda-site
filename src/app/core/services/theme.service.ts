import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {
    // Verificar se estamos no browser
    if (typeof window !== 'undefined') {
      // Verificar preferência salva no localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkModeSubject.next(savedTheme === 'dark');
      } else {
        // Verificar preferência do sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkModeSubject.next(prefersDark);
      }
    }
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkModeSubject.value;
    this.isDarkModeSubject.next(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    }
  }

  setTheme(isDark: boolean): void {
    this.isDarkModeSubject.next(isDark);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }

  getCurrentTheme(): boolean {
    return this.isDarkModeSubject.value;
  }
}
