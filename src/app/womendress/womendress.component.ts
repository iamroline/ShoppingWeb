import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-womendress',
  templateUrl: './womendress.component.html',
  styleUrls: ['./womendress.component.css']
})
export class WomendressComponent implements OnInit {
  public subhead="Shop Women Dress"
  
  ngOnInit() {
  }

  public products=[
    {
      prodID:"wd1",
      routerlink:"/women-dressA",
      img: "assets/dress1.jpeg",
      name:"Dress A",
      price:85,
      qty:1
    },
    {
      prodID:"wd2.1",
      routerlink:"/women-pantsAbrown",
      img: "assets/dress2.webp",
      name:"Pants A - Brown",
      price:85,
      qty:1
    },
    {
      prodID:"wd2.2",
      routerlink:"/women-pantsAblue",
      img: "assets/dress2blue.webp",
      name:"Pants A - Blue",
      price:85,
      qty:1
    },
    
    {
      prodID:'wd3.1',
      routerlink:"/women-dressBbeige",
      img: "assets/dress3beige.webp",
      name:"Dress B - Beige",
      price:85,
      qty:1
    },
    {
      prodID:'wd3.2',
      routerlink:"/women-dressBGrey",
      img: "assets/dress3grey.webp",
      name:"Dress B - Grey",
      price:85,
      qty:1
    },
    {
      prodID:'wd4',
      routerlink:"/women-dressC",
      img: "assets/dress4.webp",
      name:"Dress C",
      price:85,
      qty:1
    },
    {
      prodID:'wd5.1',
      routerlink:"/women-dressDbeige",
      img: "assets/dress5brown.webp",
      name:"Dress D - Beige",
      price:85,
      qty:1
    },
    {
      prodID:'wd5.2',
      routerlink:"/women-dressDgreen",
      img: "assets/dress5green.jpeg",
      name:"Dress D - Green",
      price:85,
      qty:1
    },
    {
      prodID:'wd5.3',
      routerlink:"/women-dress-dblack",
      img: "assets/dress5black.webp",
      name:"Dress D - Black",
      price:85,
      qty:1
    },

  ]

  public q=1;

  plus(items){
    this.q++;
    items.qty=this.q;
  }

  minus(items){
    if(this.q>1){
      this.q--;
      items.qty=this.q;
    }
  }

  itemscart: any=[];
  cart(category)
  {
    let cartDataNull=localStorage.getItem('localcart');
    if(cartDataNull == null){
      let storageDataGet:any = [];
      storageDataGet.push(category);
      localStorage.setItem('localcart',JSON.stringify(storageDataGet))
    }
    
    else
    {
      var id=category.prodID;
      let index:number=-1;
      //create Javascript object
      this.itemscart = JSON.parse(localStorage.getItem('localcart'));
      for (let i=0; i <this.itemscart.length;i++){
        //if it is the same product id, 
        if(id===this.itemscart[i].prodID){
          //increase the qty instead
          this.itemscart[i].qty = category.qty;
          index=i;
          break;
        }
      }
      if (index===-1)
      {
        this.itemscart.push(category);
        localStorage.setItem('localcart',JSON.stringify(this.itemscart))
      }
      else{
        localStorage.setItem('localcart',JSON.stringify(this.itemscart))
      }
    }
    this.cartnumberfun()
  }

  constructor(private cartser :CartserviceService) { }
  cartnumberfun(){
    var cartvalue=JSON.parse(localStorage.getItem('localcart'));
    var cartnumber=cartvalue.length;
    this.cartser.cartSubject.next(cartnumber)
  }


}
