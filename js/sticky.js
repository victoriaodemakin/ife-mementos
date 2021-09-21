const header = document.querySelector(".header");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > header.offsetHeight + 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
