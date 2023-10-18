import { Component, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {slideInAnimation} from "../animation";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [slideInAnimation]
})
export class ContactComponent {
  animationState: 'left' | 'right' | 'void' = 'void';
  submitted = false;
  showPrivacyPolicy = false;
  form;

  constructor(private fb: FormBuilder, private el: ElementRef, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue]
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const componentHeight = this.el.nativeElement.offsetHeight;
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (scrollPosition >= componentPosition && this.animationState === 'void') {
      this.animationState = 'left';
    }
    if (scrollPosition < componentPosition || window.pageYOffset > (componentPosition + componentHeight)) {
      this.animationState = 'void';
    }
  }

  sendEmail() {
    // Extrahiere den Namen, die E-Mail-Adresse und die Nachricht aus dem Formular
    const name = this.form.get('name')?.value;
    const email = this.form.get('email')?.value;
    const message = this.form.get('message')?.value;

    // Erstelle das emailData-Objekt mit den Daten
    const emailData = {
      name: name,
      email: email,
      message: message
      // Hier können Sie weitere Daten hinzufügen, falls erforderlich
    };
    console.log(emailData);
    this.http.post('https://formspree.io/f/mnqklgzj', emailData).subscribe(
      (response) => {
        console.log('E-Mail wurde erfolgreich gesendet', response);
        console.log(emailData);
        this.form.reset();
        this.submitted = true;
      },
      (error) => {
        console.error('Fehler beim Senden der E-Mail', error);
      }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form is valid, send email');
      this.sendEmail();
    } else {
      console.log('Form is invalid');
    }
    setTimeout(() => {
      this.submitted = false;
    }, 500);
  }

  openPrivacyPolicy() {
    this.showPrivacyPolicy = true;
  }
  closePrivacyPolicy() {
    this.showPrivacyPolicy = false;
  }
}
