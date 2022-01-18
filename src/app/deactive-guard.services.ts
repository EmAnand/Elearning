import { Component, Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { QuestionComponent } from './question/question.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuardServices implements CanDeactivate<QuestionComponent> {

  canDeactivate(component: QuestionComponent ): boolean{
    // component.formNane.
    // return conform 
    if(component.myForm.dirty){
     return  confirm('you have some unchange. your data is lost ?')
    }
    return true
  }
  constructor() { }
}