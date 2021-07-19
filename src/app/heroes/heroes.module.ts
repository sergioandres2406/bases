import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule ({
// las declaraciones van a ser los componentes que tiene el módulo    
declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //exports son las cosas que son publicas  de mi modulo
    exports: [
        ListadoComponent
    ],
    imports: [
        //aqui estoy trayendo  commonModule que es el sirve para el *NgFor  *NgIf
        
        CommonModule
    ]
    
})


export class HeroesModule {}

