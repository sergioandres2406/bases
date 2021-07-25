import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'
 
})

export class MainpageComponent  {

  personajes: Personaje []  =[

    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 10000
    }

     

  ];

  nuevo: Personaje = {

    nombre: 'Maestro Rochi',
    poder: 7500
   }

  agregarNuevoPersonaje(argumento: Personaje){
    this.personajes.push( argumento );
   
  }

  /* con este constructor estoy inicializando el servicio DbzService  */
  constructor (private dbzService: DbzService) {
  
  }

}
