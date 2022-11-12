const section = document.getElementsByClassName("grid");
const contact = document.getElementById("contact");
const hero = document.getElementById("hero");
const nav = document.getElementById("nav");
// navigation and hero section animation
gsap.from(nav, {
  opacity: 0,
  y: -10,
  duration: 1,
  scrollTrigger: {
    trigger: hero,
    start: "top top"
  }
});
gsap.from(hero, {
  opacity: 0,
  y: -100,
  delay: 0.5,
  duration: 1,
});

// project section animation
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
// contact section animation
gsap.fromTo(
  contact.children,
  {
    y: "+=100",
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: contact,
      start: "top center"
    }
  }
)
