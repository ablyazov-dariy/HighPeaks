import './styles/style.css';
import { gsap } from 'gsap';

import { ScrollTrigger, Back, Power2 } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#screen',
    scrub: 1,
    pin: true,
    end: '200%',
  },
  defaults: {
    duration: 100,
    easing: Power2.easeInOut,
  },
});

tl.to('#cloud-1', {
  xPercent: -50,
  yPercent: 100,
  ease: Back.easeIn,
});

tl.to(
  '#cloud-2',
  {
    x: '40vw',
    y: '-100vh',
    ease: Back.easeIn,
  },
  '-=100',
);

tl.to(
  '#mountain-back',
  {
    yPercent: -10,
    scale: 1.2,
  },
  '-=100',
);

tl.to(
  '#mountain-right',
  {
    xPercent: 10,
    yPercent: 100,
  },
  '-=100',
);

tl.to(
  '#mountain-left',
  {
    xPercent: -10,
    yPercent: 100,
  },
  '-=97',
);

tl.to(
  '#sun',
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

tl.from('#about-mountain-bottom', {
  yPercent: 100,
  duration: 30,
});

tl.from(
  '#about-mountain',
  {
    yPercent: 100,
    duration: 50,
  },
  '-=30',
);

tl.from(
  '#about-content',
  {
    pointerEvents: 'none',
    opacity: 0,
    duration: 50,
  },
  '-=30',
);
