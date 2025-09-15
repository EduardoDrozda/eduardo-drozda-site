import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '@core/services/data.service';
import { PersonalInfo } from '@core/models/skill.model';
import { Nl2brPipe } from '@shared/pipes/nl2br-pipe';

@Component({
  selector: 'app-about',
  imports: [CommonModule, Nl2brPipe],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  personalInfo: PersonalInfo | null = null;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });
  }
}
