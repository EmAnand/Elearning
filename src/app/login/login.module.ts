import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PasswordChangeComponent } from './password-change/password-change.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    PasswordChangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class LoginModule { }
