import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  standalone: true,
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  @Output() close = new EventEmitter();

  constructor(private router: Router) { }
  closePrivacyPolicy(){
    this.close.emit();
    this.router.navigate(['/']).then(r => {});
  }

}
