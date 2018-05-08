import { Component, OnInit, Input } from '@angular/core';
// Debo añadir Input porque estoy introduciendo algo
// por la entrada (en este caso clickar)
import { Hero } from '../hero'; // Necesito la clase hero

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  // Solamente recive un objeto hero y lo muestra

  constructor() { }

  ngOnInit() {
  }


}
