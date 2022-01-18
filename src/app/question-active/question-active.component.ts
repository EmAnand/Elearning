import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-question-active',
  templateUrl: './question-active.component.html',
  styleUrls: ['./question-active.component.css']
})
export class QuestionActiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){

  console.log(f)
  }
}
