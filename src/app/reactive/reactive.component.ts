import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  signupForm!: FormGroup;

  genders = ['male', 'female'];

  constructor() {}

  get hobbiesControl(){
     return (<FormArray>this.signupForm.get('hobbies')).controls
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),

      gender: new FormControl('female'),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm.value)
  }

  addHobby(){

    const control = new FormControl('',[Validators.required]);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
    
  }
}
