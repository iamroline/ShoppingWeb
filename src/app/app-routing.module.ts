import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AccountComponent } from './account/account.component';
import { WomenActiveset1Component } from './women-activeset1/women-activeset1.component';
import { WomenActiveset2Component } from './women-activeset2/women-activeset2.component';
import { Women2Component } from './women2/women2.component';
import { WomenActiveComponent } from './women-active/women-active.component';
import { Activeset1GreenComponent } from './activeset1-green/activeset1-green.component';
import { Activeset2BlueComponent } from './activeset2-blue/activeset2-blue.component';
import { WomenDressAComponent } from './women-dress-a/women-dress-a.component';
import { WomenPantsAblueComponent } from './women-pants-ablue/women-pants-ablue.component';
import { WomenPantsAbrownComponent } from './women-pants-abrown/women-pants-abrown.component';
import { WomenDressBbeigeComponent } from './women-dress-bbeige/women-dress-bbeige.component';
import { WomenDressBGreyComponent } from './women-dress-bgrey/women-dress-bgrey.component';
import { WomenDressCComponent } from './women-dress-c/women-dress-c.component';
import { WomenDressDbeigeComponent } from './women-dress-dbeige/women-dress-dbeige.component';
import { WomenDressDblackComponent } from './women-dress-dblack/women-dress-dblack.component';
import { WomenDressDgreenComponent } from './women-dress-dgreen/women-dress-dgreen.component';
import { AboutComponent } from './about/about.component';
import { LoginfailComponent } from './loginfail/loginfail.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { WomendressComponent } from './womendress/womendress.component';
import { MenactiveComponent } from './menactive/menactive.component';
import { MenshirtComponent } from './menshirt/menshirt.component';
import { FinalisedComponent } from './finalised/finalised.component';
const routes: Routes = [
    {path: '',   redirectTo: '/home', pathMatch: 'full'},
    {path: 'account', component: AccountComponent},
    {path: 'cart', component: CartComponent},
    {path: 'home', component: HomeComponent},
    {path: 'men', component: MenComponent},
    {path: 'about', component: AboutComponent},
    {path: 'women', component: WomenComponent},
    {path: 'women-activeset1', component: WomenActiveset1Component},
    {path: 'women-activeset2', component: WomenActiveset2Component},
    {path: 'women2', component: Women2Component},
    {path: 'women-active', component: WomenActiveComponent},
    {path: 'activeset1-green', component: Activeset1GreenComponent},
    {path: 'activeset1-blue', component: Activeset2BlueComponent},
    {path: 'women-dressA', component: WomenDressAComponent},
    {path: 'women-pantsAblue', component: WomenPantsAblueComponent},
    {path: 'women-pantsAbrown', component: WomenPantsAbrownComponent},
    {path: 'women-dressBbeige', component: WomenDressBbeigeComponent},
    {path: 'women-dressBGrey', component: WomenDressBGreyComponent},
    {path: 'women-dressC', component: WomenDressCComponent},
    {path: 'women-dressDbeige', component: WomenDressDbeigeComponent},
    {path: 'women-dress-dblack', component: WomenDressDblackComponent},
    {path: 'women-dressDgreen', component: WomenDressDgreenComponent},
    {path: 'login-fail', component: LoginfailComponent},
    {path: 'login-success', component: LoginsuccessComponent},
    {path: 'finalised', component: FinalisedComponent},
    {path: 'women-dress', component: WomendressComponent},
    {path: 'men-active', component: MenactiveComponent},
    {path: 'men-shirt', component: MenshirtComponent},
    
    {path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent=[AccountComponent,CartComponent,HomeComponent,MenComponent,WomenComponent,
  WomenActiveset1Component,WomenActiveset2Component,PageNotFoundComponent,Women2Component, WomenActiveComponent,
 Activeset2BlueComponent,Activeset1GreenComponent,
  WomenDressAComponent,
  WomenPantsAblueComponent,
  WomenPantsAbrownComponent,
  WomenDressBbeigeComponent,
  WomenDressBGreyComponent,
  WomenDressCComponent,
  WomenDressDbeigeComponent,
  WomenDressDblackComponent,
  WomenDressDgreenComponent,
  AboutComponent,
  LoginsuccessComponent,
  LoginfailComponent,
  WomendressComponent,
  MenshirtComponent,
  MenactiveComponent,
  FinalisedComponent
]
