import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  portfolioItems = [
    {
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imageUrl: '../../assets/img/join.png',
      links: [
        { url: 'https://alexej-hein.developerakademie.net/join/index.html', label: 'Live test' },
        { url: 'https://github.com/AlexejHein/join', label: 'Github', class: 'gitbtn' }
      ]
    },
    {
      title: 'Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      imageUrl: '../../assets/img/PolloLoco.png',
      links: [
        { url: 'https://alexej-hein.developerakademie.net/ElPolloLoco', label: 'Live test' },
        { url: 'https://github.com/AlexejHein/ElPolloLoco', label: 'Github', class: 'gitbtn' }
      ]
    },
  ];


  goToLink(event: Event, url: string): void {
    event.preventDefault();
    window.open(url, '_blank');
  }

}
