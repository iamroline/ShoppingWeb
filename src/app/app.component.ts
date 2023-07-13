import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heading = 'The Sustainable Store';
  public email="";

  createemail(){
    alert(this.email+" has been succesfully subscribed!")
  }

  
}
