import {Component, ElementRef, HostListener} from '@angular/core';
import { ScrollService } from '../scroll.service';
import {slideInAnimation} from "../animation";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [slideInAnimation]
})
export class SkillsComponent {
  constructor(private scrollService: ScrollService, private el: ElementRef) { }

  animationState: 'left' | 'right' | 'void' = 'void';

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

  scrollToContact() {
    this.scrollService.scrollToElement('contact');
  }

  icons= ['assets/img/iconsSkills/Angular.svg',
          'assets/img/iconsSkills/css.svg',
          'assets/img/iconsSkills/html.svg',
          'assets/img/iconsSkills/Firebase.svg',
          'assets/img/iconsSkills/JavScript.svg',
          'assets/img/iconsSkills/Typescript.svg',
          'assets/img/iconsSkills/Git.svg',
          'assets/img/iconsSkills/Api.svg',
          'assets/img/iconsSkills/mat des.svg',
          'assets/img/iconsSkills/Scrum.svg',
          'assets/img/iconsSkills/Automation.svg',
  ];
  deskription = ['Angular', 'CSS', 'HTML', 'Firebase', 'JavaScript', 'TypeScript', 'Git', 'API', 'WordPress', 'Scrum', 'Material Design'];
}
