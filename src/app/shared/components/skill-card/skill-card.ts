import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../core/models/skill.model';

@Component({
  selector: 'app-skill-card',
  imports: [CommonModule],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss'
})
export class SkillCard {
  @Input() skill!: Skill;

}
