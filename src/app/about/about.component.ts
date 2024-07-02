import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent implements OnInit{
  showAnimation = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset
    this.showAnimation = scrollPosition >= 200; // Start the animation when the user has scrolled 200px
  }
  ngOnInit() {
    this.checkScroll();
  }
}
