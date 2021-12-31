import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IlearningService {

  constructor(private http:HttpClient) { }

  exam(){
    return this.http.get('https://musj504rk9.execute-api.ap-south-1.amazonaws.com/default/GetQuestionAndAnswer');
  }
  
}
