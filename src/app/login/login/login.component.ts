
import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
alert:boolean=true;

  constructor(private http:LoginService,
    private route:Router ) { }

  ngOnInit(): void {
  }
  formsubmit(f:NgForm){
    //if(f.valid){
    //console.log(f)
    //console.log(f.value)
      this.http.login(f.value).subscribe((val)=>{
        this.alert = false;
        let a = JSON.stringify(val)
        localStorage.setItem('token', a)
        
        }
        
    //  })
    //console.log(f.form.)
)}
  
login(event:any, username:any, password:any) {
  event.preventDefault();
  var success = this.http.login(username,  );
  if (success) {
    console.log(this.route);
    this.route.navigate(['']);
  } else {
    console.log("Login failed, display error to user");
  }
}
      
closeAlert(){
  this.alert=false;
}   

    }
