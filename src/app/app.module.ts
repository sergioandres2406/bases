import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './Contador/contador.module';





@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    //importo heroes.module
    HeroesModule,
    ContadorModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
