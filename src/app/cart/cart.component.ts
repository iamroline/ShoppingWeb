import { Component, Input, OnInit } from '@angular/core';
import { isEmbeddedView } from '@angular/core/src/view/util';
import { validateConfig } from '@angular/router/src/config';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() public parentData;
  @Input() public parentData1;
  public subhead="Check Out"
  public email=""
  public phone=""
  public fname=""
  public lname=""
  public address=""
  public cardnum=""
  public exp=""
  public ccv=""
  public promostatus=""
  public promo=""
  public msg;
  public checkerror
  public sample
  public disc
  public discName
  public FTname
  public FT
  public newtotal

  constructor(private cartser :CartserviceService) { }
  ngOnInit() {
    //calls upon loading: 
    this.cartDetails();
    this.totalprice();
  }
  subtotal(input){
    return input.qty*input.price;
  }

  getcartDetails:any[];

  cartDetails()
  {
    if(localStorage.getItem('localcart')){
      this.getcartDetails=JSON.parse(localStorage.getItem('localcart'))
    }
  }

  total:number=0;
  totalprice(){
    if(localStorage.getItem('localcart')){
      this.getcartDetails=JSON.parse(localStorage.getItem('localcart'));
      this.total=this.getcartDetails.reduce(function(acc,val){
        return acc+(val.price * val.qty)
      },0)
    }
  }

  singleDelete(item){
    if(localStorage.getItem('localcart'))
    {
      
      this.getcartDetails=JSON.parse(localStorage.getItem('localcart'))
      for(let i=0;i<this.getcartDetails.length;i++)
      {
        if(this.getcartDetails[i].prodID === item.prodID && item.size===this.getcartDetails[i].size ){
          this.getcartDetails.splice(i,1)
          localStorage.setItem('localcart',JSON.stringify(this.getcartDetails));
          this.totalprice();
        }
      }
      this.cartnumberfun()
    }
  }
  cartnumberfun(){
    var cartvalue=JSON.parse(localStorage.getItem('localcart'));
    var cartnumber=cartvalue.length;
    this.cartser.cartSubject.next(cartnumber)
  }

  checkout(){
    this.msg=this.address
    if (this.email && this.phone && this.fname && this.lname && this.address && this.cardnum && this.exp && this.ccv !== ""){
      alert("Thank you " +this.fname+" "+this.lname+" for your purchase! \n \n An email has been set to: \n \n"+this.email+ "\n \nYour items will be shipped to: \n \n"+this.address)
    }
    else 
    {this.msg = "Missing Info. Please fill in all required details."}
  }
  checkpromo(){
    if (this.promo=="promo"){
      this.promostatus="10% off has been applied to your cart!"
      this.checkerror=true;
      this.discName="Applied Promotion:"
      this.disc=this.total*0.1
      this.FTname="Final Total:"
      this.FT=this.total-this.disc
    }
    else{
      this.promostatus="Invalid promo code."
      this.checkerror=false;
    }
  }


  
}
