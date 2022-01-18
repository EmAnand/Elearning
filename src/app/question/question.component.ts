import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  myForm= new FormGroup({
    FirstName: new FormControl(''),
    lastname: new FormControl(''),
    textarea : new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  toSubmit(){
  console.log(this.myForm);
    
  }
}
