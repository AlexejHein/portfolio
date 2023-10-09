import { Component, HostListener, ElementRef } from '@angular/core';
import {slideInAnimation} from "../animation";
import { animationsscrollService } from '../animationsscroll.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slideInAnimation]
})
export class AboutComponent {
  animationState: string = 'void';

  constructor(private el: ElementRef, private scrollService: animationsscrollService) {
    this.scrollService.scrollObservable.subscribe((newState: string) => {
      this.animationState = newState;
    });
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollService.checkScroll(this.el, this.animationState);
  }


}
