import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IlearningService {

  constructor(private http:HttpClient) { }

  login(){
    return this.http.post('http://api.1stresume.com/api/Identity/InsertUser',{
      
      
    })
  }
  
}
