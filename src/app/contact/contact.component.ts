import { Component, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {slideInAnimation} from "../animation";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [slideInAnimation]
})
export class ContactComponent {
  animationState: 'left' | 'right' | 'void' = 'void';

  form;

  constructor(private fb: FormBuilder, private el: ElementRef) {
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

  onSubmit() {
    if (this.form.valid) {
      console.log('Form is valid, send email');
      this.form.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
