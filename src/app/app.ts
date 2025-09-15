import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '@shared/components/header/header';
import { Footer } from '@shared/components/footer/footer';
import { Home } from '@pages/home/home';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
