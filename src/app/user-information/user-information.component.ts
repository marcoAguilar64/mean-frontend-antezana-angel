import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  localNickname = sessionStorage.getItem('localNickname');

  constructor() { }

  ngOnInit() {
  }

}
