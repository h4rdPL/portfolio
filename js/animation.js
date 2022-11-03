//
const section = document.getElementsByClassName("grid");
// gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  gsap.from("#nav", {
    opacity: 0,
    y: -10,
    duration: 1,
  });
  gsap.from("#hero", {
    opacity: 0,
    y: -100,
    delay: 0.5,
    duration: 0.5,
  });
});
// project secion animation
gsap.fromTo(
  section,
  {
    x: "+=300",
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top center",
    },
  }
);
