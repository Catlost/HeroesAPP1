import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
 // añado la clase Hero del tipo definido
import { HEROES } from '../moch-heroes'
// añado la matriz HEROES con la "BD"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})
export class HeroesComponent implements OnInit {

  // Darle un valor a la var heroes con la matriz de heroes
  heroes = HEROES;

  //Añado un heroe dandole valores a sus variables
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  constructor() { }

  ngOnInit() {
  }

  // El heroe elegido es de tipo Hero
  selectedHero: Hero;

  // Defino la clase para saber que Hero esta select
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}

