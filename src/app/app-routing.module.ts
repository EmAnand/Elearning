import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MyHomeComponent } from './my-home/my-home.component';


const routes: Routes = [
  
  
  {path:'contact', component:ContactComponent},
  
  {path:'about', component:AboutComponent},
  {path:'my-home',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'myhome', component:MyHomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
