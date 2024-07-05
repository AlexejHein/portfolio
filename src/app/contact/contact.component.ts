import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('name', this.contactForm.get('name')?.value || '');
      formData.append('email', this.contactForm.get('email')?.value || '');
      formData.append('message', this.contactForm.get('message')?.value || '');

      this.http.post('https://alexej-hein/contact.php', formData).subscribe(
        response => {
          console.log('Kontaktformular erfolgreich abgeschickt', response);
          alert('Danke! Ihre Nachricht wurde gesendet.');
          this.contactForm.reset();
        },
        error => {
          console.error('Fehler beim Absenden des Kontaktformulars', error);
          alert('Es gab ein Problem beim Versenden Ihrer Nachricht. Bitte versuchen Sie es später noch einmal.');
        }
      );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
