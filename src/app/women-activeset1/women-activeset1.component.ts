import { Component, OnInit } from '@angular/core';
import { SizeChartService } from '../size-chart.service';

@Component({
  selector: 'app-women-activeset1',
  templateUrl: './women-activeset1.component.html',
  styleUrls: ['./women-activeset1.component.css']
})
export class WomenActiveset1Component implements OnInit {
  public subhead="Shop Women"
  public productname="Active Set A in Brown"
  public size=""
  public item=""
  public qty=0;
  public check=true;
  public  err;
  public chart=[]

  constructor(private charts:SizeChartService){}
  ngOnInit() {
    this.chart=this.charts.womensize();
  }
 
sizexs(){
  this.size="XS"
}
sizes(){
  this.size="S"
}
sizem(){
  this.size="M"
}
sizel(){
  this.size="L"
}
sizexl(){
  this.size="XL"
}
addcart(){
  if (this.size==""){
    this.item="Please select a size"
    this.check=false
  }
  if(this.qty==0){
    this.item="Please add quantity"
  }
  else{
    this.item=this.qty+" x "+this.productname+" in size "+this.size+" has been added to cart!";
    this.check=true;
  }
}

plus(){
  this.qty++;
}

minus(){
  if(this.qty>0){
    this.qty--;
  }

}

}
