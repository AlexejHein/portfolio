import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  @Output() close = new EventEmitter();
  closePrivacyPolicy(){
    this.close.emit();
  }

}
