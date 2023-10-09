import { Component, ElementRef, HostListener } from '@angular/core';
import * as portfolioItems from '../../assets/portfolio-items.json';
import {slideInAnimation} from "../animation";
import { animationsscrollService } from '../animationsscroll.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [slideInAnimation]
})
export class PortfolioComponent {

  portfolioItems: any = (portfolioItems as any).default;
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


  goToLink(event: Event, url: string): void {
    event.preventDefault();
    window.open(url, '_blank');
  }

}
