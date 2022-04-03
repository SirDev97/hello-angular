import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'newer-course-form',
  templateUrl: './newer-course-form.component.html',
  styleUrls: ['./newer-course-form.component.css'],
})
export class NewerCourseFormComponent {
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contant: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl(),
  //   }),
  //   topics: new FormArray([]),
  // });

  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }
}
