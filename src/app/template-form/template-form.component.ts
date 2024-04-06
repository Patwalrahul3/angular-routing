import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent {
  @ViewChild('f') signupForm!: NgForm;
  gender = 'male';
  about!: string;
  submitted = false;



  user = {
    username: '',
    email: '',
    gender: '',
    about: ''
  };


  onFormSubmit() {
  
    // console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;
    this.user.about = this.signupForm.value.about;

    // reset
    this.signupForm.reset();
    
  }

  // setValue
  fillValues(){
    this.signupForm.form.setValue({
      userData : {
        username: "Rahul Patwal",
        email: "patwalrahul3@gmail.com"
      },
      gender: 'male',
      about: 'ALL Rounder'
    })
  }
  // patchValue
  // fillValues() {
  //   this.signupForm.form.patchValue({
  //     userData: {
  //       username: 'Rahul Patwal',
  //       email: 'patwalrahul3@gmail.com',
  //     },
  //     // gender: 'male',
  //     // about: 'ALL Rounder'
  //   });
  // }
}
