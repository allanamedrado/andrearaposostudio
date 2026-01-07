import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Banner } from './layout/banner/banner';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Andrea Raposo Studio');
}
