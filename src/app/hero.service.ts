import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './moch-heroes';

@Injectable(
  /*{

    // Esto declara que el servido debería ser creado
    // por el injector de la aplicación raíz
  providedIn: 'root',
}*/
)
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
  // se realiza una llamada sincrona al método
  // pudiendo obtener los héroes sincrónicamente
  // Esto no sucede en una app real, porque devuelve
  // h

}
