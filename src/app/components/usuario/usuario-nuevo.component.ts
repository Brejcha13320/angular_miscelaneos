import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private router:ActivatedRoute ) {
    
    this.router.parent?.params.subscribe( params => {
      console.log("RUTA HIJA UsuarioNuevo");
      console.log(params);
    } );
   }
  ngOnInit(): void {
  }

}
