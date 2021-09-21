const left1 = document.querySelector(".left-1");
const right1 = document.querySelector(".right-1");
const container1 = document.querySelector(".container-1");

left1.addEventListener("mouseenter", () =>
  container1.classList.add("hover-left-1")
);
left1.addEventListener("mouseleave", () =>
  container1.classList.remove("hover-left-1")
);

right1.addEventListener("mouseenter", () =>
  container1.classList.add("hover-right-1")
);
right1.addEventListener("mouseleave", () =>
  container1.classList.remove("hover-right-1")
);

const left2 = document.querySelector(".left-2");
const right2 = document.querySelector(".right-2");
const container2 = document.querySelector(".container-2");

left2.addEventListener("mouseenter", () =>
  container2.classList.add("hover-left-2")
);
left2.addEventListener("mouseleave", () =>
  container2.classList.remove("hover-left-2")
);

right2.addEventListener("mouseenter", () =>
  container2.classList.add("hover-right-2")
);
right2.addEventListener("mouseleave", () =>
  container2.classList.remove("hover-right-2")
);
