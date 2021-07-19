import { Component } from '@angular/core';


@Component ({
    selector: 'app-contador',
    template: `
    <!--Aqui estoy llamando  al atributo titulo que esta dentro de la clase
    AppComponent en app.component.ts-->
        <h1> {{titulo}} </h1>

        <h3>la base es : <strong> {{base}} </strong></h3>

        <!--Se pone el evento en parentesis-->
        <button (click)= "acumular(+base)"> + {{base}} </button>

        <span>{{ numero }}  </span>

        <button (click)= "acumular(-base)"> - {{base}} </button>
    `
})

export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 9;

    acumular(valor: number ) {
        this.numero += valor;
  }
}