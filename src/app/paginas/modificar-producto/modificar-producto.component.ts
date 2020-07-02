import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ServicioSPService } from "../../servicios/servicio-sp.service"
import { data } from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  @Input('prod') prod : any;
  @Input('auxProducto') auxProducto : any;
  @Output() cambio = new EventEmitter();
  modificar = true;
  productoAux : any;
  constructor(private regService: ServicioSPService, private router: Router) { }

  ngOnInit(): void {
    this.productoAux = this.prod;

  }

  modificarProductoBD(produc)
  {
    let aux = this.auxProducto;
    this.regService.obtenerXTodos("productos").subscribe((productoAux) => {
      productoAux.forEach((data: any) => {
        if(data.data().nombre == aux.nombre && aux.tipo == data.data().tipo)
        {
        
          this.regService.actualizar('productos',produc,data.id);
          this.cambiar();
          
        }

      })

    })
  }

  cambiar()
  {
    this.cambio.emit(false);
  }

}
