import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
   
    
    
    
  

  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
