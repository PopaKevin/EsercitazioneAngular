import { Component } from '@angular/core';
import { Quarto } from '../quarto/quarto';

@Component({
  selector: 'app-terzo',
  standalone: true,
  imports: [Quarto],
  templateUrl: './terzo.html'
})
export class Terzo {
  name = 'terzo';
}
