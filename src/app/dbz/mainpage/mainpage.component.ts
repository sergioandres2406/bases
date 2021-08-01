import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'

})

export class MainpageComponent  {

  nuevo: Personaje = {

    nombre: 'Maestro Rochi',
    poder: 7500
   }


  /* con este constructor estoy inicializando el servicio DbzService  */
  constructor () {

  }

}
