import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Hero, About, Portfolio, Skills, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}
