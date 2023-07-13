import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }
  public user;
  public pw;
  public loginRedirect;
 
  check(){
    if (this.user=="roline" && this.pw=="roline"){
      this.loginRedirect="/login-success"
    }
    else{
      this.loginRedirect="/login-fail"
    }
  }

  register(){
    
  }
}
