window.addEventListener("load", () => {
  console.log("page is loaded");

  gsap.from("#nav", {
    opacity: 0,
    y: -10,
    duration: 1,
  });
  gsap.from("#hero", {
    opacity: 0,
    y: -100,
    delay: 1,
    duration: 0.5,
  });
});
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    start: "top top",
    end: "+=300%",
    pin: true,
  },
});

tl1.to(
  {
    yPercent: -100,
    ease: "none",
    stagger: 0.5,
  },
  0
);
