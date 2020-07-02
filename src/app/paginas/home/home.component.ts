import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modales/usuario';
import { ServicioSPService } from "../../servicios/servicio-sp.service"
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Usu: Usuario = { email: "", nombre: "", password: ""};
  altaLocal : boolean = false;
  altaProd : boolean = false;
  tablaProd : boolean = false;

  constructor(
    private regService: ServicioSPService,
    private router: Router,
    public afAuth: AngularFireAuth,

  ) { }

  ngOnInit(): void {
    this.Usu.nombre = this.regService.traerToken().name;
  }
  async onLogout() {
    try {
      
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

}
