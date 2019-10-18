import {
  sequence,
  group,
  query,
  animateChild,
  stagger,
  trigger,
  state,
  style,
  AUTO_STYLE,
  transition,
  animate,
  animation,
  useAnimation
} from '@angular/animations';

const customAnimation = animation(
  [
    style({
      opacity: '{{opacity}}',
      transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
  ],
  {
    params: {
      duration: '200ms',
      delay: '0ms',
      opacity: '0',
      scale: '1',
      x: '0',
      y: '0',
      z: '0'
    }
  }
);

export const themeAnimations = [
  trigger('animate', [
    transition('void => *', [useAnimation(customAnimation)])
  ]),

  trigger('cardToggle', [
    state(
      'collapsed, void',
      style({
        overflow: 'hidden',
        height: '0px'
      })
    ),
    state(
      'expanded',
      style({
        overflow: 'hidden',
        height: AUTO_STYLE
      })
    ),
    transition('collapsed <=> expanded', [animate('400ms ease-in-out')])
  ]),

  trigger('cardClose', [
    state(
      'open',
      style({
        opacity: 1
      })
    ),
    state(
      'closed',
      style({
        opacity: 0,
        display: 'none'
      })
    ),
    transition('open <=> closed', animate('400ms'))
  ]),

  trigger('cardIconToggle', [
    state(
      'an-off, void',
      style({
        overflow: 'hidden',
        width: '35px'
      })
    ),
    state(
      'an-animate',
      style({
        overflow: 'hidden',
        width: AUTO_STYLE
      })
    ),
    transition('an-off <=> an-animate', [animate('400ms ease-in-out')])
  ])
];
