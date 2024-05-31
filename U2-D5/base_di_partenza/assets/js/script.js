document.addEventListener("scroll", function () {
  const button = document.getElementById("scroll-btn");
  const nav = document.getElementById("navBar");
  if (window.scrollY > 240) {
    button.classList.add("scrolled");
    nav.classList.add("scrolled");
  } else {
    button.classList.remove("scrolled");
    nav.classList.remove("scrolled");
  }
});
