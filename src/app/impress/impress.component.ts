import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-impress',
  templateUrl: './impress.component.html',
  styleUrls: ['./impress.component.scss']
})
export class ImpressComponent {
  @Output() close = new EventEmitter();

  closeImpressum() {
    this.close.emit();
  }

}
