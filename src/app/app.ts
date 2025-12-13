import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Homepage } from './pages/homepage/homepage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SchoolBlog');
}
