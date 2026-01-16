import { Component } from '@angular/core';
import { Secondo } from './secondo/secondo';
import { Terzo } from './terzo/terzo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Secondo, Terzo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'app';
}
