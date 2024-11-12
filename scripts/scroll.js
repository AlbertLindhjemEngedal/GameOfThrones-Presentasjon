const scrollThreshold = 650;

const throneImage = document.getElementById("throne");
const bottomDiv = document.querySelector("main_menu");
// check this if fail

window.addEventListener("scroll", function () {
  const textElement = document.getElementById("main_title");
  const textElement2 = document.getElementById("small_text");
  const scrollTop = window.scrollY;
  const opacity = 1 - Math.min(scrollTop / scrollThreshold, 1);
  textElement.style.opacity = opacity;
  textElement2.style.opacity = opacity;

  const bottomDivRect = bottomDiv.getBoundingClientRect();
  const bottomDivBottom = bottomDivRect.bottom;

  // Check if the bottom of the bottom div is visible in the viewport
  if (bottomDivBottom <= window.innerHeight) {
    // If we're at the bottom of the div, set the image to be static in the div
    throneImage.style.position = "absolute";
    throneImage.style.bottom = "0"; // Align to the bottom of the div
  } else {
    // If we're above the bottom of the div, keep it fixed at the bottom of the screen
    throneImage.style.position = "fixed";
    throneImage.style.bottom = "0"; // Keep it fixed at the bottom of the viewport
  }
});
