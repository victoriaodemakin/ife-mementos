function openPage() {
  var getPage = document.getElementById("search").value;
  if (getPage === "home") {
    window.open("index.html");
  }
  if (getPage === "gallery") {
    window.open("gallery.html");
  }
  if (getPage === "about") {
    window.open("about.html");
  }
  if (getPage === "exhibitions") {
    window.open("exhibition.html");
  }
  if (getPage === "print") {
    window.open("print.html");
  }
  if (getPage === "press") {
    window.open("press.html");
  }
  if (getPage === "subscribe") {
    window.open("subscribe.html");
  }
  if (getPage === "contact") {
    window.open("contact.html");
  } else {
    window.open("no-page.html");
  }
}
