import { Component, OnInit } from '@angular/core';
import { SizeChartService } from '../size-chart.service';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-women-dress-dbeige',
  templateUrl: './women-dress-dbeige.component.html',
  styleUrls: ['./women-dress-dbeige.component.css']
})
export class WomenDressDbeigeComponent implements OnInit {

  public subhead="Shop Women"
  public product:any=[{
    prodID:'wd5.1',
    routerlink:"/women-dressDbeige",
    img: "assets/dress5brown.webp",
    name:"Dress D - Beige",
    price:85,
    qty:1,
    size:""
  }]
  

  public size=""
  public remarks=""
  public qty=0;
  public check=true;
  public  err;
  public chart=[]

  constructor(private charts:SizeChartService, private cartser :CartserviceService){}
  ngOnInit() {
    this.chart=this.charts.womensize();
  }
 
  sizexs(s){
    s.size="XS"
  }
  sizes(s){
    s.size="S"
  }
  sizem(s){
    s.size="M"
  }
  sizel(s){
    s.size="L"
  }
  sizexl(s){
    s.size="XL"
  }


  public q=1;
  plus(num){
    this.q++;
    num.qty=this.q;
  }

  minus(num){
    if(this.q>1){
      this.q--;
      num.qty=this.q;
    }
  }



  itemscart: any=[];
  cart(category)
  {
    let cartDataNull=localStorage.getItem('localcart');
    var size=category.size;
    var id=category.prodID;
    var qty=category.qty;
    var name = category.name;
    if (size =="")
    {
      
      alert("Please enter size")
      this.remarks="Please Select a size"
      this.check=false;
    }
    // if there is no key stored inside the local storage, set a new item LOCALCART
    else if(cartDataNull == null)
    {
      let storageDataGet:any = [];
      storageDataGet.push(category);
      //convert JSON item to a string
      localStorage.setItem('localcart',JSON.stringify(storageDataGet))
      alert(category.qty+ " x "+category.name+" in size "+category.size+" has been added to cart!");
    }

    else
    {
      let index: number=-1;
	    //create JavaScript object
      this.itemscart = JSON.parse(localStorage.getItem('localcart'));

      for (let i=0; i <this.itemscart.length;i++){
        if(id===this.itemscart[i].prodID && size===this.itemscart[i].size ){
          this.itemscart[i].qty = this.itemscart[i].qty + category.qty;
          alert(category.qty+ " x "+category.name+" in size "+category.size+" has been added to cart!");
          index=i;
          console.log (index)
          break;
        }
      }
      if (index===-1)
      {
        this.itemscart.push(category);
        console.log(this.product)
        localStorage.setItem('localcart',JSON.stringify(this.itemscart));    
        alert(category.qty+ " x "+category.name+" in size "+category.size+" has been added to cart!");
      }

      else{
        localStorage.setItem('localcart',JSON.stringify(this.itemscart))
      }
    }
    this.cartnumberfun()
    category.size="";
    this.remarks="";
  }

  cartnumberfun(){
    var cartvalue=JSON.parse(localStorage.getItem('localcart'));
    var cartnumber=cartvalue.length;
    this.cartser.cartSubject.next(cartnumber)
  }




}
