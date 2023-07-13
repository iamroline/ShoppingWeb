import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule , routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SizeChartService } from './size-chart.service';
import { HeaderComponent } from './header/header.component';
import { CartserviceService } from './cartservice.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ProductsComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SizeChartService,CartserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
