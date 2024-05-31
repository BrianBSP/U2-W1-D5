document.addEventListener("scroll", function () {
  const button = document.getElementById("scroll-btn");
  const nav = document.getElementsByName("nav");
  if (window.scrollY > 50) {
    button.classList.add("scrolled");
    nav.classList.add("scrolled");
  } else {
    button.classList.remove("scrolled");
    nav.classList.remove("scrolled");
  }
});
