import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
  
})
export class PersonajesComponent {

  //@Input  sirve para convertir el array personajes de la 
  //clase  PersonajesComponent  en un input  del array de objetos
  //personajes de main component (mirar como queda en personajes.component.html)
  @Input() personajes: Personaje [] = [];
  

}
