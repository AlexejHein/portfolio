import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showImpressum = false;

  openImpressum() {
    this.showImpressum = true;
  }

  goToLink(event: Event, url: string): void {
    event.preventDefault();
    window.open(url, '_blank');
  }
  closeImpressum() {
    this.showImpressum = false;
  }
}
