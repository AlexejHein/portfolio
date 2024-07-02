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
      // Hier können Sie den Code hinzufügen, um das Formular abzusenden
      console.log(this.contactForm.value);
    } else {
      // Wenn das Formular ungültig ist, markieren Sie alle Felder als "berührt", um die Validierungsfehler anzuzeigen
      this.contactForm.markAllAsTouched();
    }
  }
}
