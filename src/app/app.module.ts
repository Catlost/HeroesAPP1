import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// Necesario añadir Para usar un formulario

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
// Al crear el componente VC nos añade los imports
// Y declarations
import { HeroService } from './hero.service'
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule //También se ha de añadir en los imports de NG
  ],
  providers: [
     // no need to place any providers due to the `providedIn` flag...
     HeroService,
     MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
