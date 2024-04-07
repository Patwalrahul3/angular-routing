import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  signupForm!: FormGroup;

  DuplicatedName = ['rahul', 'manish'];

  genders = ['male', 'female'];

  constructor() {}

  get hobbiesControl() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('', [
          Validators.required,
          this.IsDuplicatedRestrictedName.bind(this),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),

      gender: new FormControl('female'),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }

  addHobby() {
    const control = new FormControl('', [Validators.required]);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  IsDuplicatedRestrictedName(
    controls: FormControl
  ): { [s: string]: boolean } | null {
    if (this.DuplicatedName.includes(controls.value)) {
      return { nameIsRestricted: true };
    }

    return null;
  }
}
