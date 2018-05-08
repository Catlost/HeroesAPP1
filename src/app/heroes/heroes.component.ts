import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
 // añado la clase Hero del tipo definido
import { HEROES } from '../moch-heroes'
// añado la matriz HEROES con la "BD"
import { HeroService } from '../hero.service';
// Añado el servicio del hero

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})
/* export class HeroesComponent implements OnInit {

  // El heroe elegido es el Hero
  selectedHero: Hero;

  // Darle un valor a la var heroes con la matriz de heroes
  //heroes = HEROES;

  // Añadir los servicios
  heroes: Hero[];
  //Añado un heroe dandole valores a sus variables
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    // Se podría llamar en el constructor pero no se recomienda
    // Debe hacer cosas lo más simple posible
    // Y menos llamar a una función que realiza solicitudes HTTP
    // A servidor remoto como un servicio de datos real
    // Por eso lo añadimos en el ciclo de vida de OnInit
    // Que Angular lo llamara cuando sea necesario
  }

  

  // Defino la clase para saber que Hero esta select
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

//Recupera los heroes del servicio
getHeroes(): void {
  //this.heroes = this.heroService.getHeroes();
  // Este era antes de añadir la funcionalidad del Observable
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

} */
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}

