// Import stylesheets
import './style.css';
const { gsap } = require('gsap');
const { ScrollTrigger } = require('gsap/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.demo',
    start: 'top top',
    end: '+=800%',
    scrub: true,
    pin: true,
  },
});

const boxA = gsap.to('.box-a', {
  x: 450,
  duration: 3,
});

const boxB = gsap.to('.box-b', {
  x: 450,
  duration: 3,
});

const boxC = gsap.to('.box-c', {
  x: 450,
  duration: 3,
});

tl.addLabel('point0')
  .add(boxA, 'point0')

  .addLabel('point1')
  .add(boxB, 'point1')

  .addLabel('point2')
  .add(boxC, 'point2');
