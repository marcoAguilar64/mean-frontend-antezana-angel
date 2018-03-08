import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sky-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  };

  constructor(private authservice: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  login(): void {
    console.log(this.credentials);
    this.authservice.login(this.credentials)
      .subscribe(
        (response) => {
          //console.log('token response:', response.token);
          sessionStorage.removeItem('token');
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['user','information']);
        }, (error) => {
          //console.log('error al autenticar : ', error.error.message);
          alert(error.error.message);
        }
      );
  }
}
