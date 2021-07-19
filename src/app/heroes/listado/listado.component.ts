import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})

export class ListadoComponent {

heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Goku'];
heroeBorrado: string = '';

 borrarHeroe() {
   console.log('borrando...');
   /* splice sirve para eliminar 
   un elemento de un arreglo */
   /* this.heroes.splice(0,1); */

   /*  Aqui le digo que me muestre el heroe que borré o si no he borrado aun nadie, muestra en blanco  */
   this.heroeBorrado = this.heroes.shift() || '';
   
   console.log(this.heroeBorrado);
   
 }



}
