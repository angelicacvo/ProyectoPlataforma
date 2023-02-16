import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

const USERNAME = 'admin';
const PASSWORD = '12345678';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userInfo = {
    username: 'admin',
    name: 'NombreUsuario'
  };
  username: string = "";
  password: string = "";

  constructor(private route: Router, private authService: AuthService){}

  login() {
    if(this.username=== USERNAME && this.password===PASSWORD){
      this.authService.login(this.userInfo)
      setTimeout(() => {
        window.location.reload();
        }, 1);
      this.route.navigate(['']);
    } else {
      alert("Ingresaste datos incorrectos, por favor verifica")
    }
  }
}
