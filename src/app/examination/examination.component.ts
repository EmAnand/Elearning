import { Component, OnInit } from '@angular/core';
import { IlearningService } from '../ilearning.service';
import { Router } from '@angular/router';
// import data from '../';  
@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {

  constructor(private learn:IlearningService,  private router:Router) { }
 data:any
az900:any;

 
  ngOnInit(): void {
    this.learn.exam().subscribe((resource)=>{
      this.data= resource;
      console.log(this.data)
    })
    
 // this.data=JSON.parse('test.json')
  //0console.log(this.data)
//  this.data= result;
  
  }
  

}


// var result={
//   "Item": {
//       "CreationDate": 22122021,
//       "ToughId": 5,
//       "SubjectName": "Microsoft Certified: Azure Fundamentals",
//       "SubjectId": "Mirosoft_AZ900",
//       "Question": {
//           "AnswerType": "MultiCorrect",
//           "AnswerOption": [
//               "Basic",
//               "Developer",
//               "Standard",
//               "Profession Direct",
//               "Premier"
//           ],
//           "QuestionText": [
//               "Answer by dragging the correct option from the list to the answer area.",
//               "Select:",
//               "The support plan must allow for new support requests to be opened.",
//               "Which of the following are support plans that will allow this? ",
//               "Your company intends to subscribe to an Azure support plan."
//           ],
//           "CorrectAnswer": [
//               2,
//               3,
//               4,
//               5
//           ],
//           "Details": [
//               "https://azure.microsoft.com/en-us/support/plans/"
//           ]
//       },
//       "Organization": "Microsoft",
//       "PaperQuesionNo": 101
//   }
// }

