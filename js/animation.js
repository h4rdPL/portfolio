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
