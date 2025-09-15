import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { ContactInfo } from '../../../core/models/skill.model';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {
  isDarkMode = false;
  contactInfo: ContactInfo | null = null;
  currentYear = new Date().getFullYear();

  constructor(
    private themeService: ThemeService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });

    this.dataService.getContactInfo().subscribe(info => {
      this.contactInfo = info;
    });
  }

  downloadCV(): void {
    if (this.contactInfo?.cvUrl) {
      const link = document.createElement('a');
      link.href = this.contactInfo.cvUrl;
      link.download = 'cv-eduardo-drozda.pdf';
      link.click();
    }
  }
}
