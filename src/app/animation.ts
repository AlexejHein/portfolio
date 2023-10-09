import { trigger, style, animate, transition } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  transition('void => left', [
    style({ transform: 'translateX(-100%)' }),
    animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
  ]),
  transition('void => right', [
    style({ transform: 'translateX(100%)' }),
    animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
  ])
]);
