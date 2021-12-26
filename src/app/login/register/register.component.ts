import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(private http:LoginService) { }

  ngOnInit(): void {
  }

  signup(f:NgForm){

   // console.log(f);
    console.log(JSON.stringify(f.value));
    //console.log(this.signup);   
    // this.http.signup(f.value).subscribe((val)=>{
      // let a=JSON.stringify(val)
      // localStorag e.setItem(val)

      this.http.signup(f.value).subscribe((val)=>{
          //  let a = JSON.stringify(val)
          // localStorage.setItem('token', a)
      console.log(val, "data created successfull")
    })
  }
}
