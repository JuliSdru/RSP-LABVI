import { Component, OnInit } from '@angular/core';
import { Locales } from '../../modales/locales';
import { ServicioSPService } from "../../servicios/servicio-sp.service"

@Component({
  selector: 'app-carga-locales',
  templateUrl: './carga-locales.component.html',
  styleUrls: ['./carga-locales.component.css']
})
export class CargaLocalesComponent implements OnInit {

  locals: Locales = { nombre: "", email: "", telefono: "", localidad: ""};

  message: string = "";
  spinner: boolean = false;

  todoOk : boolean = false;

  resolved(captchaResponse: string) {
    if(captchaResponse){
      this.todoOk = true;
    }
  }
  
  constructor(
    private regService: ServicioSPService,
  ) { }

  ngOnInit(): void {

  }


  subirLocal() {
    this.regService.guardarLocal(this.locals);
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
      this.message = 'Local registrado con exito';
      
    }, 3000);
  }

}
