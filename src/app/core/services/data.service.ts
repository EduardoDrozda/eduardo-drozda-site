import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill, PersonalInfo, ContactInfo } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPersonalInfo(): Observable<PersonalInfo> {
    return of({
      name: 'Eduardo Drozda',
      title: 'ENGENHEIRO DE SOFTWARE',
      experience: 'HÁ SETE ANOS CONSTRUINDO SOLUÇÕES',
      description: `Sou Eduardo, engenheiro de software com um pouco mais de nove anos de experiência em desenvolvimento full-stack, dedicado à criação de soluções escaláveis ​e impactantes. Minha trajetória profissional abrange diversos setores, incluindo finanças, saúde, e-commerce e pagamentos digitais, onde desenvolvi plataformas que atendem milhões de usuários.

Minha expertise é particularmente forte em tecnologias front-end, como Angular, TypeScript, NgRx e RxJS, e em todo esse ecossistema, complementada por sólidas habilidades de back-end em Node.js (incluindo NestJS e Express) e .NET. Tenho experiência em projetar microsserviços, implementar sistemas em tempo real e integrar tecnologias como Kafka e Redis para aprimorar o desempenho e a confiabilidade. Também me dedico a manter a alta qualidade e a automação do código, utilizando ferramentas como Jest, Cypress e Behat.

Além das minhas habilidades técnicas, liderei equipes, mentorei colegas desenvolvedores e desempenhei um papel fundamental em decisões estratégicas de produtos e arquitetura. Estou ansioso para aproveitar essa experiência em ambientes dinâmicos e de alto desempenho, onde posso continuar a crescer, colaborar e causar um impacto significativo.`,
      image: 'assets/images/eduardo-drozda.jpg',
      quote: '"É fácil evitar erros; basta não fazer nada. Mas isso seria o maior erro de todos." - Dan Tocchini'
    });
  }

  getSkills(): Observable<Skill[]> {
    return of([
      {
        id: 'frontend',
        name: 'Front-end',
        category: 'frontend',
        languages: ['HTML', 'Javascript/TypeScript', 'CSS/SASS'],
        frameworks: ['Angular', 'React', 'Next'],
        icon: 'assets/icons/html5.svg',
        description: 'Desenvolvo interfaces web aderindo aos mais elevados padrões de qualidade e excelência na experiência do usuário.'
      },
      {
        id: 'backend',
        name: 'Back-end',
        category: 'backend',
        languages: ['Javascript/TypeScript', 'PHP', 'C#'],
        frameworks: ['Node JS', 'Express', 'Nest JS', 'Laravel', '.NET', 'MySQL', 'Postgres', 'Docker', 'Docker Compose'],
        icon: 'assets/icons/backend.svg',
        description: 'Desenvolvo sistemas seguros e escaláveis, aderindo aos mais altos padrões de qualidade, incluindo clean code e design patterns, assegurando excelência técnica.'
      },
      {
        id: 'mobile',
        name: 'Mobile',
        category: 'mobile',
        languages: ['Javascript/TypeScript'],
        frameworks: ['React Native', 'Ionic'],
        icon: 'assets/icons/mobile.svg',
        description: 'Crio interfaces móveis variadas, abrangendo desde aplicações simples até sistemas complexos, utilizando tecnologias avançadas.'
      }
    ]);
  }

  getContactInfo(): Observable<ContactInfo> {
    return of({
      email: 'contato@eduardodrozda.com',
      linkedin: 'https://linkedin.com/in/eduardodrozda',
      github: 'https://github.com/eduardodrozda',
      cvUrl: 'assets/files/cv-eduardo-drozda.pdf'
    });
  }
}
