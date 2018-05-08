import { Component, OnInit, Input } from '@angular/core';
// Debo añadir Input porque estoy introduciendo algo
// por la entrada (en este caso clickar)
import { Hero } from '../hero'; // Necesito la clase hero
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  // Solamente recive un objeto hero y lo muestra

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getHero();
  }
 
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
 
  goBack(): void {
    this.location.back();

  }
}

