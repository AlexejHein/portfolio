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
  closeImpressum() {
    this.showImpressum = false;
  }
}
