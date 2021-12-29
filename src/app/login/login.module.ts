import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { CheckPasswordDirective } from './login/validaters/passwordValidators.Directive';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    PasswordChangeComponent,
    CheckPasswordDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class LoginModule { }
