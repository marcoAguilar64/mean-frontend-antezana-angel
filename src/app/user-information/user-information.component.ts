import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';

@Component({
  selector: 'sky-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  localNickname = sessionStorage.getItem('localNickname');
  myUser: User = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    avatar: ''
  }

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    ///console.log('token--->',sessionStorage.getItem('token'));
    this.authservice.getMyPersonalInformation()
      .subscribe(
        (response) => {
          console.log('response: ', response);
          this.myUser = response.data
        }, (error) => {
          console.log('error: ', error);
          this.myUser = {
            name: '',
            lastname: '',
            username: '',
            email: '',
            avatar: ''
          };
        }
      );
  }

}
