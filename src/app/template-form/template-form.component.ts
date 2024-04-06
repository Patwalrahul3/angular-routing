import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  gender =  "male"
  about!: string;

@ViewChild('f') signupForm!: NgForm;
  
onFormSubmit(){
    console.log(this.signupForm);
    

  }

}
