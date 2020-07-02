import { Component, OnInit } from '@angular/core';
import { ServicioSPService } from "../../servicios/servicio-sp.service"


@Component({
  selector: 'app-table-productos',
  templateUrl: './table-productos.component.html',
  styleUrls: ['./table-productos.component.css']
})
export class TableProductosComponent implements OnInit {

  productos = [];
  modificar = false;
  productoAux : any;
  auxcargarProducto  : any;

  constructor(
    private regService: ServicioSPService,
  ) { }

  ngOnInit(): void {
    this.modificar = false;
    this.productoAux = null;
    this.regService.obtenerXTodos("productos").subscribe((productoAux) => {
      productoAux.forEach((response: any) => {
        let prodInfo = response.payload.doc.data();
        this.productos.push(prodInfo);
      })
    });
  }

  modificarProducto(produc)
  {
    
    let auxiliar = {
      nombre : produc.nombre,
      precio : produc.precio,
      stock : produc.stock,
      marca : produc.marca,
      local : produc.localNombre,
      tipo : produc.tipo
    }
  
      this.auxcargarProducto = auxiliar;
      this.productoAux = produc;
      this.modificar = true;
    
  }
  funCambiar(e)
  {
    this.modificar = e;
    console.log(e);
  }

}
