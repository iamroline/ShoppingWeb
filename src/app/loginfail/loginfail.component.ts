import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginfail',
  templateUrl: './loginfail.component.html',
  styleUrls: ['./loginfail.component.css']
})
export class LoginfailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  message=`Invalid username/password. Please try again or register`

}
