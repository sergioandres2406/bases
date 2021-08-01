import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import {DbzService} from "../services/dbz.service";


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent  {

  @Input() nuevo: Personaje = {

    nombre:'',
    poder: 0
  }

  constructor( private dbzService: DbzService) {
  }

  /*  Una Variable Output  llamada onNuevoPersonaje del tipo Eventemitter
      onNuevoPersonaje Emite  o devuelve un elemento de tipo Personaje*/
  //@Output () onNuevoPersonaje:  EventEmitter<Personaje> = new EventEmitter();

  /* aqui defino el método agregar */
  agregar(  ){

    /* trim - elimina los espacios  dentro de un string
      push() lleva  datos a arreglo */
      if ( this.nuevo.nombre.trim().length === 0 ) { return; }
      console.log(this.nuevo);
      this.dbzService.agregarPersonaje(this.nuevo);
       // this.onNuevoPersonaje.emit(this.nuevo);


        this.nuevo = { nombre : '', poder: 0 };


  }



}
