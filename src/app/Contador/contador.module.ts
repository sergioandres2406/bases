
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';



@NgModule ({
// las declaraciones van a ser los componentes que tiene el módulo    
declarations: [
        ContadorComponent
    ],
    //exports son las cosas que son publicas  de mi modulo
    exports: [
        ContadorComponent
    ],
    imports: [
        //aqui estoy trayendo  commonModule que es el sirve para el *NgFor  *NgIf
        
      
    ]
    
})


export class ContadorModule {}