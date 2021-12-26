//  import { Directive } from "@angular/core";
//  import { AbstractControl,  NG_VALIDATORS, Validators } from "@angular/forms";

//  @Directive({
//      selector: '[password]',
//      providers: [{provide:NG_VALIDATORS,
//      useExisting:checkPassword,
//  multi:true}]

//  })

//  export class checkPassword implements Validators{
//      validate(control: AbstractControl):{[key: string]:null}{
//          return control.value!= '' ? {'checkPassword' : true}:null
//      }
//  }