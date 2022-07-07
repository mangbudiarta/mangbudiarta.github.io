var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 45) {
    nav.classList.add("bg-light", "shadow-sm");
  } else {
    nav.classList.remove("bg-light", "shadow-sm");
  }
});
