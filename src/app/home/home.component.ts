import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'sky-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  localNickname = sessionStorage.getItem('localNickname');;

  ngOnInit() {
  }

  setLocalNickname(): void {
    sessionStorage.setItem('localNickname', this.localNickname);
  }

  removeLocalNickname(): void {
    sessionStorage.removeItem('localNickname');
    this.localNickname = '';
  }
}
