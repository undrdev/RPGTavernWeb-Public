import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  state(
    'show',
    style({
      width: '100%',
    })
  ),
  state(
    'hide',
    style({
      width: '0%',
    })
  ),
  transition('hide <=> show', [animate('0.5s')]),
]);

export const fadeInAnimation = trigger('fadeIn', [
  state(
    'show',
    style({
      opacity: 1,
      visibility: 'visible',
    })
  ),
  state(
    'hide',
    style({
      opacity: 0,
      visibility: 'hidden',
    })
  ),
  transition('show <=> hide', [animate('0.5s')]),
]);

export const fadeAnimation = trigger('fade', [
  state(
    '*',
    style({
      opacity: 1,
      visibility: 'visible',
    })
  ),
  state(
    'void',
    style({
      // opacity: 0,
      // visibility: 'hidden',
    })
  ),
  transition(':enter, :leave', [animate('0.2s')]),
]);

export const rowInOutAnimation = trigger('rowInOut', [
  transition(':enter', [
    style({ height: '0px' }),
    animate('0.5s'),
    style({ height: '48px' }),
  ]),
  transition(':leave', [animate('0.5s', style({ height: '0px' }))]),
]);

export const pageFadeAnimation = trigger('pageFade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('2s', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('0.2s', style({ opacity: 0 }))]),
]);
