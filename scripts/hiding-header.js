let lastScrollY = window.scrollY;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  const scrollPosition = scrollTop / (documentHeight - windowHeight);

  if (scrollPosition <= 0.01) {
    // If scrolled 90% towards the top, make the header visible
    header.style.transform = "translateY(0)";
  } else if (scrollTop > lastScrollY) {
    // Scrolling down
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    header.style.transform = "translateY(0)";
  }

  lastScrollY = scrollTop;
});
