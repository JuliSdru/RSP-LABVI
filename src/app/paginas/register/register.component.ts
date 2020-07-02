import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { ServicioSPService } from "../../servicios/servicio-sp.service"
import { Usuario } from '../../modales/usuario';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Usu: Usuario = { email: "", nombre: "", password: ""};
  message: string = "";
  spinner: boolean = false;
  todoOk : boolean = false;

  resolved(captchaResponse: string) {
    if(captchaResponse){
      this.todoOk = true;
    }
  }

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private regService: ServicioSPService
  ) { }

  ngOnInit(): void {
  }

  //ingresar
  public register() {
    // verifico que todos los datos esten presentes
    if (this.Usu.email || this.Usu.nombre || this.Usu.email) {
      // y creo el usuario con firebase
      this.auth.createUserWithEmailAndPassword(this.Usu.email, this.Usu.password)
        .then(data => {
          //guardo los datos en mi servicio
          var user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: this.Usu.nombre
          });
          // this.regService.guardarUsu(this.Usu);
          // coloco un spinner de 3s para avisar que todo salio bien y redirigit al login
          this.spinner = true;
          this.message = "Se completo su registro!";
          setTimeout(() => {
            this.message = "";
            this.spinner = false;
            this.router.navigateByUrl('/login');
          }, 3000)
        })
        // si algo sale mal muestra el mensaje
        .catch(e => {
          this.message = e.message;
        });
    } else {
      this.message = "Debe completar todos los datos.";
    }
  }

}
