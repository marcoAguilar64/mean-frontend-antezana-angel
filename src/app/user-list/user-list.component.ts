import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sky-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  myUserService: UserService;
  userlist: User[] = [];

  constructor(userService: UserService,
    private router: Router) {
    this.myUserService = userService;
  }

  ngOnInit() {
    this.myUserService.getUserList()
      .subscribe(
        (response) => {
          //console.log('Respuesta del servidor: ', response);
          this.userlist = response.data;
        },
        (error) => {
          console.log('Error del servidor: ', error);
        }
      );
  }

  public viewUser(userId): void {
    console.log('id usuario: ', userId);
    this.router.navigate(['user', userId, 'view']);
  }

}
