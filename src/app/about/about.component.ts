import { Component, HostListener, ElementRef } from '@angular/core';
import {slideInAnimation} from "../animation";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slideInAnimation]
})
export class AboutComponent {
  animationState: string = 'void';

  constructor(private el: ElementRef) { }

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


}
