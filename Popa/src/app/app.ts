import { Component } from '@angular/core';
import { Secondo } from './secondo/secondo';
import { Terzo } from './terzo/terzo';
import { Quarto } from './quarto/quarto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Secondo, Terzo, Quarto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'app';
}
