import './styles/style.css';
import { gsap } from 'gsap';

import { ScrollTrigger, Back, Power2 } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#screen',
    markers: true,
    scrub: 1,
    pin: true,
    end: '200%',
  },
  defaults: {
    duration: 100,
    easing: Power2.easeInOut,
  },
});

tl.to('#screen > [src="/hero/cloud.png"]:not(:last-child)', {
  xPercent: -50,
  yPercent: 100,
  ease: Back.easeIn,
});

tl.to(
  '#screen > [src="/hero/cloud.png"]:last-child',
  {
    x: '40vw',
    y: '-100vh',
    ease: Back.easeIn,
  },
  '-=100',
);

tl.to(
  '#screen > [src="/hero/mountain-back.png"]',
  {
    yPercent: -10,
    scale: 1.2,
  },
  '-=100',
);

tl.to(
  '#screen > [src="/hero/mountain-right.png"]',
  {
    xPercent: 10,
    yPercent: 100,
  },
  '-=100',
);

tl.to(
  '#screen > [src="/hero/mountain-left.png"]',
  {
    xPercent: -10,
    yPercent: 100,
  },
  '-=97',
);

tl.to(
  '#screen > img + div',
  {
    width: () => window.innerWidth * 6,
    ease: 'power2.in',
    duration: 100,
  },
  '-=50',
);

tl.to(
  '#screen .content-container',
  {
    opacity: 0,
    duration: 30,
  },
  '-=30',
);
