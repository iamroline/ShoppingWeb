import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-women-active',
  templateUrl: './women-active.component.html',
  styleUrls: ['./women-active.component.css']
})
export class WomenActiveComponent implements OnInit {
  public subhead="Shop Women Activewear"
  
  ngOnInit() {
  }

  public products=[
    {
      prodID:'wa1.1',
      routerlink:"/women-activeset1",
      img: "assets/active1.webp",
      name:"Active Set A - Brown",
      price:80,
      qty:1
    },
    {
      prodID:'wa1.2',
      routerlink:"/activeset1-blue",
      img: "assets/active1blue.webp",
      name:"Active Set A - Blue",
      price:80,
      qty:1
    },
    {
      prodID:'wa1.3',
      routerlink:"/activeset1-green",
      img: "assets/active1green.webp",
      name:"Active Set A - Green",
      price:80,
      qty:1
    },
    {
      prodID:'wa2',
      routerlink:"/women-activeset2",
      img: "assets/active2.webp",
      name:"Active Set B",
      price:90,
      qty:1
    }
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
