import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  signupForm!: FormGroup;

  genders = ['male', 'female']

  constructor(){

  }

  ngOnInit(){
    this.signupForm = new FormGroup({
      'username': new FormControl('null'),
      'email': new FormControl('null'),
      'gender': new FormControl('female'),
    })
  }

}
