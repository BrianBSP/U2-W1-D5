/* transition della navbar allo scroll della pagina */
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
/* animantion delle M */

const m = document.querySelectorAll("g");
const mArray = [...m];

const mZeroArray = mArray.filter((element) => element.getAttribute("opacity") === "0");
console.log(mZeroArray);

const accendiEmme = setInterval(() => {
  let random = Math.round(Math.random() * mZeroArray.length);
  if (mZeroArray[random].getAttribute("opacity") === "0") {
    mZeroArray[random].setAttribute("opacity", 1);
  } else {
    mZeroArray[random].setAttribute("opacity", 0);
  }
}, 40);
