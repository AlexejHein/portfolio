import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
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
