import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
helper=new JwtHelperService()


  constructor(private http:HttpClient) { }
decodeToken :any
  
  // login(model:any){
  //   return this.http.post('http://api.1stresume.com/api/Identity/login', model)
  // }
    login(model: any) {
    return this.http.post('http://api.1stresume.com/api/Identity/login', model).pipe(
      map((response: any) => {
        this.decodeToken = this.helper.decodeToken(response.token);
     // console.log('fromservice',this.decodeToken);
        localStorage.setItem('token', response.token);


        return this.decodeToken
      })
    );
  }

  loggedIn(): boolean {
    const token:string = localStorage.getItem('token') ?? "";
    //const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6InZpa2FzQGdtYWlsLmNvbSIsIkVtYWlsQWRkcmVzcyI6InZpa2FzQGdtYWlsLmNvbSIsIk1vYmlsZU5vIjoiODU5NjU4NzQ3OCIsIkFsbG93ZWRUb0dldFBhcnRuZXJEZXRhaWwiOiJ0cnVlIiwiQWxsb3dlZFRvV3JpdGVSZXZpZXciOiJ0cnVlIiwiZXhwIjoxNjQwODY2MTI2fQ.BsVzZ8Q2TgCaaGXhr89NqGUbJ_dHqXdbGQqKX4lB0vY";
    console.log('token',token);
    console.log(this.helper.isTokenExpired(token));
    return !this.helper.isTokenExpired(token);
    
  }
  logout(){
    localStorage.removeItem('token')
  }

  signup(model:any){
    return this.http.post('http://api.1stresume.com/api/Identity/InsertUser' , model)
  }

 
}
