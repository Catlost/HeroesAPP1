import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './moch-heroes';
import { Observable } from 'rxjs'; 
import { of } from 'rxjs/observable/of';
//import { Observable, of } from 'rxjs'; 
// Necesario ya que la devolución va a ser un observable
// y los símbolos de rx con of
import { MessageService } from './message.service';
//Servicio mesaje 

@Injectable(
  /*{

    // Esto declara que el servido debería ser creado
    // por el injector de la aplicación raíz
  providedIn: 'root',
}*/
)
export class HeroService {

  constructor(private messageService: MessageService) { }
  // Añado messageService para que el constructor lo use

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    // voy añadiendo cada uno
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  /*getHeroes(): Hero[] {
    return HEROES;
  }*/
  // se realiza una llamada sincrona al método
  // pudiendo obtener los héroes sincrónicamente
  // Esto no sucede en una app real, porque devuelve
  // heroes falsos. Pero deberá obtener heroes de un serv
  //remoto --> Operacion inherentemente asincrona
  // Podría tomar devolución de llamada, con un Promise
  // o Observable en este caso de la ultima
  // Poruqe usará HTTPClient.get --> 

}
