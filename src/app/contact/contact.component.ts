import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'message': new FormControl(null, Validators.required),
    'check': new FormControl(null, Validators.requiredTrue)
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
