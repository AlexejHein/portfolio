import { Component } from '@angular/core';
import * as portfolioItems from '../../assets/portfolio-items.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  portfolioItems: any = (portfolioItems as any).default;


  goToLink(event: Event, url: string): void {
    event.preventDefault();
    window.open(url, '_blank');
  }

}
