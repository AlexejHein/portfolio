import { Component, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {slideInAnimation} from "../animation";
import { animationsscrollService } from '../animationsscroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [slideInAnimation]
})
export class ContactComponent {
  animationState: string = 'left';

  form = this.fb.group({
    name: ['', [Validators.required , Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    checkbox: [false, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder,
              private scrollService: animationsscrollService,
              private el: ElementRef) {
    this.scrollService.scrollObservable.subscribe((newState: string) => {
      this.animationState = newState;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollService.checkScroll(this.el, this.animationState);
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
