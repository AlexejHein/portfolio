import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
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
export class SkillsComponent implements OnInit{
  showAnimation = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset
    this.showAnimation = scrollPosition >= 800; // Start the animation when the user has scrolled 200px
  }
  ngOnInit() {
    this.checkScroll();
  }
  constructor(private scrollService: ScrollService) { }

  scrollToContact() {
    this.scrollService.scrollToElement('contact');
  }

  icons= ['../../assets/img/iconsSkills/Angular.svg',
          '../../assets/img/iconsSkills/css.svg',
          '../../assets/img/iconsSkills/html.svg',
          '../../assets/img/iconsSkills/Firebase.svg',
          '../../assets/img/iconsSkills/JavScript.svg',
          '../../assets/img/iconsSkills/Typescript.svg',
          '../../assets/img/iconsSkills/Git.svg',
          '../../assets/img/iconsSkills/Api.svg',
          '../../assets/img/iconsSkills/mat des.svg',
          '../../assets/img/iconsSkills/Scrum.svg',
          '../../assets/img/iconsSkills/Automation.svg',
  ];
  deskription = ['Angular', 'CSS', 'HTML', 'Firebase', 'JavaScript', 'TypeScript', 'Git', 'API', 'WordPress', 'Scrum', 'Material Design'];
}
