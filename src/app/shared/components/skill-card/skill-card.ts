import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../core/models/skill.model';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-skill-card',
  imports: [CommonModule],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss'
})
export class SkillCard {
  @Input() skill!: Skill;
  isDarkMode = false;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }
}
