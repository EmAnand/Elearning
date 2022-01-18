import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement-question',
  templateUrl: './statement-question.component.html',
  styleUrls: ['./statement-question.component.css']
})
export class StatementQuestionComponent implements OnInit {

  @Input() data:any;
  isDisplay:boolean=false;
  constructor() { }

  ngOnInit(): void {

    console.log(this.data)
  }

 //this.isDisplay =true;
//  toggleDisplay(){

   // this.isDisplay= !this.isDisplay
  //  isDisplay =true;
  isAnswerCorrect:boolean = true
  toggleDisplay(){
  this.isDisplay= !this.isDisplay;
  this.isAnswerCorrect=true;


  
//   var abc = [].map.call(document.querySelectorAll('input[name="{{i}}"]:checked'), function(cb) {
//    return Number.parseInt(cb['name']); 
//  });
//  abc.forEach(val => {
//    if(!this.data.Question.CorrectAnswer.includes(val) || !this.isAnswerCorrect){
//      this.isAnswerCorrect=false;
     
//      return;
//    }
//  });
//  this.isAnswerCorrect = (this.data.Question.CorrectAnswer.length == abc.length && this.isAnswerCorrect)? true:false;

// var abc = [].map.call(document.querySelectorAll('input[name="{{i}}"]:checked'), function(cb) {
//       return Number.parseInt(cb['id']); 
//     });

//     abc.forEach(val =>{
//       if(!this.data.Question.CorrectAnswer.checked == true){
//         this.isAnswerCorrect=false;
//         return;
//       }

//     })

// if(document.getElementsByName('{{i}}').checked = true) {

//   //Male radio button is checked
// }else if(document.getElementsByName('{{i}}').checked = false) {
//   //Female radio button is checked
// }
// JS

// const btn = document.querySelector("");

//    {
//   const selections = document.querySelectorAll('input[name="{{i}}"]');
//   let userSelection;
//   for (const resto of this.data) {
//     if (selections.checked) {
//       userSelection = selections.value;
//       break;
//     }
//   }
//   console.log(userSelection);
// };
// if(document.getElementById('yes').checked == true) {   
//   document.write("Summer radio button is selected");   
// } else {  
//   document.write("Summer radio button is not selected");   
// }  
// var getSelectedValue = document.querySelector( 'input[name="{{i}}"]:checked');   
// if(getSelectedValue != null) {   
//          document.write("Radio button is selected");  }
//  else 
//  {  
//          document.write("Nothing has been selected");  
// }
  }
}

