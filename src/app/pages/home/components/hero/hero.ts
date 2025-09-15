import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '@core/services/data.service';
import { PersonalInfo } from '@core/models/skill.model';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit {
  personalInfo: PersonalInfo | null = null;

  matrixTexts: string[] = [];

  displayedText: WritableSignal<string> = signal('');
  fullText: string = 'ENGENHEIRO DE SOFTWARE';
  isTyping: boolean = false;

  constructor(
    private dataService: DataService
  ) {
    this.initializeMatrixTexts();
  }

  ngOnInit(): void {
    this.dataService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });

    this.startTypewriting();
  }

  private initializeMatrixTexts(): void {
    const techKeywords = [
      'ANGULAR', 'REACT', 'VUE', 'TYPESCRIPT', 'JAVASCRIPT', 'PYTHON', 'JAVA', 'NODEJS',
      'HTML5', 'CSS3', 'SCSS', 'WEBPACK', 'VITE', 'DOCKER', 'KUBERNETES', 'AWS',
      'MONGODB', 'POSTGRESQL', 'MYSQL', 'REDIS', 'GIT', 'GITHUB', 'JENKINS', 'DEVOPS',
      'API', 'REST', 'GRAPHQL', 'MICROSERVICES', 'AGILE', 'SCRUM', 'TESTING', 'CYBERSECURITY'
    ];

    // Criar 100 textos estáticos
    for (let i = 0; i < 100; i++) {
      this.matrixTexts.push(techKeywords[i % techKeywords.length]);
    }
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'files/Curriculo Eduardo Fullstack - PT.pdf';
    link.download = 'Curriculo Eduardo Fullstack - PT.pdf';
    link.click();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calcular posição considerando o header fixo (5rem = 80px)
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  getMatrixText(index: number): string {
    return this.matrixTexts[index - 1] || 'ANGULAR';
  }

  private startTypewriting(): void {
    this.isTyping = true;
    this.displayedText.set('');

    let currentIndex = 0;
    const typingSpeed = 90; // Velocidade de digitação em ms

    const typeNextCharacter = () => {
      if (currentIndex < this.fullText.length) {
        this.displayedText.update(text => text + this.fullText[currentIndex]);
        currentIndex++;
        setTimeout(typeNextCharacter, typingSpeed);
      } else {
        this.isTyping = false;
      }
    };

    typeNextCharacter();
  }
}
