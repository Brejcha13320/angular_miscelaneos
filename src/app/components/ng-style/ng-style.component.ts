import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    
      <p [ngStyle]="{ 'font-size': fontSize + 'px' }" >
        Hola mundo... esta es una etiqueta
      </p>
      
      <p [style.fontSize.px]="fontSize" >
        Hola mundo... esta es una etiqueta [EN CSS ES font-size PERO AL PASAR ANGULAR SE ELIMINAN LOS ESPECIOS EN BLANCO]
      </p>

      <button class="btn btn-outline-primary" (click)="fontSize = fontSize + 5">
      <i class="fa fa-plus"></i>
      </button>
      
      <button class="btn btn-primary" (click)="fontSize = fontSize - 5">
        <i class="fa fa-minus"></i>
      </button>
    
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  fontSize:number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
