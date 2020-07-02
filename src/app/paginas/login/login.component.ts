import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mail: string = '';
  password: string = '';
  message: string = '';
  spinner: boolean = false;
  todoOk : boolean = false;

  resolved(captchaResponse: string) {
    
    if(captchaResponse){
      this.todoOk = true;
    }
  }

  constructor(
    public auth: AngularFireAuth, 
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
  }

  
  public logIn() {
    if (this.mail || this.password) {
      this.auth
        .signInWithEmailAndPassword(this.mail, this.password)
        .then((data) => {
          data.user.getIdToken().then((d) => {
            localStorage.setItem('token', d);
          });
          
          this.message = 'Ingresando';
          this.spinner = true;
          setTimeout(() => {
            this.message = '';
            this.spinner = false;
            this.router.navigateByUrl('/home');
          }, 3000);
        })
        // MENSAJE DE ERROR
        .catch((e) => {
          this.message = e.message;
        });
    } else {
      this.message = 'Debe completar todos los datos.';
    }
  }
  
}
