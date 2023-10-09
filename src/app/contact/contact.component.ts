import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form = this.fb.group({
    name: ['', [Validators.required , Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    checkbox: [false, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form is valid, send email');
      this.form.reset();
    } else {
      console.log('Form is invalid');
    }
  }


}
