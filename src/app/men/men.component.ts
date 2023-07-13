import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public subhead="Shop Men"

  public products=[
    {
      prodID:'ms1.1',
      routerlink:"/men-shirtAyellow",
      img: "assets/menA.webp",
      name:"Shirt A - Yellow",
      price:80,
      qty:1
    },
    {
      prodID:'ms1.2',
      routerlink:"/men-shirtAblue",
      img: "assets/menA-blue.webp",
      name:"Shirt A - Blue",
      price:80,
      qty:1
    },
    {
      prodID:'ms2.1',
      routerlink:"/men-shirtBbeige",
      img: "assets/menB.webp",
      name:"Shirt B - Beige",
      price:85,
      qty:1
    },
    {
      prodID:'ms2.2',
      routerlink:"/men-shirtBblue",
      img: "assets/menB-blue.webp",
      name:"Shirt B - Blue",
      price:85,
      qty:1
    },
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
    },
    {
      prodID:'ms3.1',
      routerlink:"/men-shirtColive",
      img: "assets/men3.webp",
      name:"Shirt C - Olive",
      price:90,
      qty:1
    },
    {
      prodID:'ms3.2',
      routerlink:"/men-shirtCgreen",
      img: "assets/men5.webp",
      name:"Shirt C - Green",
      price:90,
      qty:1
    },
    {
      prodID:'ms4',
      routerlink:"/men-shirtD",
      img: "assets/men4.webp",
      name:"Shirt D",
      price:70,
      qty:1
    },
  
    {
      prodID:'ms5',
      routerlink:"/men-shirtE",
      img: "assets/men6.webp",
      name:"Shirt E",
      price:80,
      qty:1
    },
    {
      prodID:'ms6',
      routerlink:"/men-shirtF",
      img: "assets/men7.webp",
      name:"Shirt F",
      price:100,
      qty:1
    },
  ]

}
