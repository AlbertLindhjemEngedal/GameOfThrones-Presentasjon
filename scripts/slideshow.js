let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 0;

function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;

  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.5 * stt
    }) perspective(16px) rotateY(-0.5deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }

  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.5 * stt
    }) perspective(16px) rotateY(0.5deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }

  // Update arrow colors based on active position
  updateArrowColors();
}

function updateArrowColors() {
  // If at the first item, make the previous arrow red
  if (active === 0) {
    prev.style.color = "black";
  } else {
    prev.style.color = ""; // Reset to default color
  }

  // If at the last item, make the next arrow red
  if (active === items.length - 1) {
    next.style.color = "black";
  } else {
    next.style.color = ""; // Reset to default color
  }
}

loadShow();

next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
};
