import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menactive',
  templateUrl: './menactive.component.html',
  styleUrls: ['./menactive.component.css']
})
export class MenactiveComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  public subhead="Shop Men Activewear"

  public products=[
    {
      prodID:'ma1.1',
      routerlink:"/men-active1",
      img: "assets/mactive1.webp",
      name:"Active A - White",
      price:60,
      qty:1
    },
    {
      prodID:'ma1.2',
      routerlink:"/men-active2",
      img: "assets/mactive2.webp",
      name:"Active A - Black",
      price:60,
      qty:1
    },
    {
      prodID:'ma2',
      routerlink:"/men-active3",
      img: "assets/mactive3.webp",
      name:"Active B",
      price:60,
      qty:1
    }
    
  ]

}
