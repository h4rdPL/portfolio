
const section = document.getElementsByClassName("grid");
const contact = document.getElementById("contact");
gsap.from("#nav", {
  opacity: 0,
  y: -10,
  duration: 1,
  scrollTrigger: {
    trigger: "#hero",
    start: "top top"
  }
});
gsap.from("#hero", {
  opacity: 0,
  y: -100,
  delay: 0.5,
  duration: 1,

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
gsap.fromTo(
  contact.children,
  {
    y: "+=100",
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: contact,
      start: "top center"
    }
  }
)