import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private scrollService: ScrollService) { }

  scrollToContact() {
    this.scrollService.scrollToElement('contact');
  }

  goToLink(event: Event, url: string): void {
    event.preventDefault();
    window.open(url, '_blank');
  }

}
