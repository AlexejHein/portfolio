import { Injectable, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class animationsscrollService {
  private scrollSubject = new Subject<'void' | 'left' | 'right'>();

  scrollObservable = this.scrollSubject.asObservable();

  checkScroll(el: ElementRef, currentState: string) {
    const componentPosition = el.nativeElement.offsetTop;
    const componentHeight = el.nativeElement.offsetHeight;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (scrollPosition >= componentPosition && currentState === 'void') {
      this.scrollSubject.next('left');
    } else if (scrollPosition < componentPosition || window.pageYOffset > (componentPosition + componentHeight)) {
      this.scrollSubject.next('void');
    }
  }
}

