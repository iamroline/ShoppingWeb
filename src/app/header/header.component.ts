import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartitem:number=0;

  constructor(private cn:CartserviceService) { 
    this.cn.cartSubject.subscribe((data)=>{
      this.cartitem=data;
    })
  }

  ngOnInit() {
  }

}
