import { Component, HostListener, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as portfolioItems from '../../assets/portfolio-items.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('slideInLeft', [
      state('void', style({transform: 'translateX(-100%)'})),
      state('*', style({transform: 'translateX(0)'})),
      transition('void <=> *', animate(500)),
    ]),
    trigger('slideInRight', [
      state('void', style({transform: 'translateX(100%)'})),
      state('*', style({transform: 'translateX(0)'})),
      transition('void <=> *', animate(500)),
    ]),
  ]
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChildren('portfolioItem') portfolioItemsRefs!: QueryList<ElementRef>;
  portfolioItems: any = (portfolioItems as any).default;
  showAnimation: boolean[] = [];

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset + 550;
    this.portfolioItemsRefs.forEach((item, index) => {
      if (item.nativeElement.offsetTop <= scrollPosition) {
        this.showAnimation[index] = true;
      } else {
        this.showAnimation[index] = false; // Reset the animation when the item is not visible
      }
    });
  }

  ngOnInit() {
    // Initialization logic here...
  }

  ngAfterViewInit() {
    this.checkScroll();
  }

  goToLink(event: Event, url: string): void {
    event.preventDefault();
    window.open(url, '_blank');
  }
}
