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
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyHomeComponent } from './my-home/my-home.component';
import { ExaminationComponent } from './examination/examination.component';
import { ExamsComponent } from './exams/exams.component';
import { OptionalQuestionComponent } from './optional-question/optional-question.component';
import { StatementQuestionComponent } from './statement-question/statement-question.component';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MyHomeComponent,
    ExaminationComponent,
    ExamsComponent,
    OptionalQuestionComponent,
    StatementQuestionComponent,  
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    BrowserAnimationsModule, 
     SimpleNotificationsModule.forRoot()   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
