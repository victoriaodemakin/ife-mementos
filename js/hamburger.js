var showmobile = document.getElementById("showmobile");
var nav = document.getElementById("navbar");

showmobile.addEventListener("click", function (e) {
  nav.classList.toggle("navigation");
  e.preventDefault();
});
