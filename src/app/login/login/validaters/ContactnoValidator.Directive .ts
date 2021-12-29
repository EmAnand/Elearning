// import { Directive } from "@angular/core";
// import { AbstractControl,  NG_VALIDATORS, Validators } from "@angular/forms";

// @Directive({
//     selector: '[contactNo]',
//     providers: [{provide:NG_VALIDATORS,
//     useExisting:checkContactNo,
// multi:true}]

// })

// export class checkContactNo implements Validators{
//     validate(control: AbstractControl):{[key: string]:null}{
//         return control.value!= '' ? {'checkContactNo' : true}:null
//     }
// }