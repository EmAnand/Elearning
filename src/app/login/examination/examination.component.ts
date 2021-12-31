import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {
  exam: any;

  constructor(private http:LoginService) {  }

  ngOnInit(): void {

    this.http.exam().subscribe((data)=>{
      this.exam= data
      console.log("data", data)
    })

  }

}

