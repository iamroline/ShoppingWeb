import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-finalised',
  templateUrl: './finalised.component.html',
  styleUrls: ['./finalised.component.css']
})
export class FinalisedComponent implements OnInit {
 
  public data: any = [];

  constructor(private http:HttpClient){}
    ngOnInit() {}
    ngAfterViewInit() : void{
      this.loadData();
  }

  public loadData(): void{
      let self = this;
      this.http.get("http://localhost:5000/api/products")
      .subscribe((res: any)=> {
              self.data = res;
      });
  }
}
