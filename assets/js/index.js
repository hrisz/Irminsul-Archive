import gsap from "https://esm.sh/gsap";
import Textify from "https://esm.sh/textify.js";

new Textify(
  {
    el: ".sub-title",
    animation: {
      by: "chars",
      duration: 0.6,
      stagger: 0.04,
      ease: "power3.out",
      animateProps: { y: "50%", opacity: 0, scale: 0.8 },
    },
  },
  gsap
);

new Textify(
  {
    el: ".hero-text",
    splitType: "words",
    animation: {
      by: "words",
      duration: 0.6,
      stagger: 0.1,
      ease: "circ.out",
      animateProps: { x: "-30%", opacity: 0 },
    },
  },
  gsap
);
