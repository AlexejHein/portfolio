import { Component, ElementRef, HostListener } from '@angular/core';
import * as portfolioItems from '../../assets/portfolio-items.json';
import {slideInAnimation} from "../animation";


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [slideInAnimation]
})
export class PortfolioComponent {

  portfolioItems: any = (portfolioItems as any).default;
  animationState: 'left' | 'right' | 'void' = 'void';

  constructor(private el: ElementRef) { }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const componentHeight = this.el.nativeElement.offsetHeight;
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (scrollPosition >= componentPosition && this.animationState === 'void') {
      this.animationState = 'right';
    }
    if (scrollPosition < componentPosition || window.pageYOffset > (componentPosition + componentHeight)) {
      this.animationState = 'void';
    }
  }


  goToLink(event: Event, url: string): void {
    event.preventDefault();
    window.open(url, '_blank');
  }

}
