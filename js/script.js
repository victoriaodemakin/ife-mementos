gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play pause resume reset",
  scroller: "body",
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".free",
    start: "top 70%",
    end: "bottom top",
  },
  opacity: 0,
  x: -20,
  ease: "power4.in",
  stagger: 0.5,
});
tl.from(
  ".box",
  {
    x: 300,
    opacity: 0,
    duration: 0.8,
    ease: "power4.inOut",
    stagger: 0.5,
  },
  "+=1"
);

//spilt screen
