import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent  {

  forma:FormGroup;
  
  constructor() { 
    this.forma = new FormGroup({
      "nombre": new FormControl(""),
      "tituloAsunto": new FormControl(""),
      "Correo": new FormControl(""),
      "Mensaje": new FormControl("")
    })

  }

  
  guardar(  ){

    console.log(this.forma.value)
  }
}
