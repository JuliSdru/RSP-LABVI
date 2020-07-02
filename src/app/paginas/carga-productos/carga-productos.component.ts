import { Component, OnInit } from '@angular/core';
import { Productos } from '../../modales/productos';
import { Locales } from '../../modales/locales';
import { ServicioSPService } from "../../servicios/servicio-sp.service"
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-carga-productos',
  templateUrl: './carga-productos.component.html',
  styleUrls: ['./carga-productos.component.css']
})
export class CargaProductosComponent implements OnInit {
  
  produc: Productos = { nombre: "", marca : "", stock: "", tipo: "", localNombre: "", localLocalidad:"", precio: ""};

  message: string = "";
  spinner: boolean = false;

  todoOk : boolean = false;

  locales = [];

  resolved(captchaResponse: string) {
    
    if(captchaResponse){
      this.todoOk = true;
    }
  }
  
  constructor(
    private regService: ServicioSPService,
  ) { }

  ngOnInit(): void {

    this.regService.obtenerXTodos("locales").subscribe((auxAutos) => {
      auxAutos.forEach((response: any) => {
        let localesInfo = response.payload.doc.data();
        this.locales.push(localesInfo);
        // console.log(localesInfo);
      })
    });


  }


  subirProd() {
    this.locales.forEach((local : any) => {
      if(local.nombre == this.produc.localNombre){
        this.produc.localNombre = local.nombre;
        this.produc.localLocalidad = local.localidad;
      }
    });
    this.regService.guardarProduc(this.produc);
    this.spinner = true;
    setTimeout(() => {
      this.message = 'Producto registrado con exito';
      this.spinner = false;
    }, 3000);
  }
}
