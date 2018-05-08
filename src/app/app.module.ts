import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// Necesario añadir Para usar un formulario

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// Al crear el componente VC nos añade los imports
// Y declarations

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //También se ha de añadir en los imports de NG
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
