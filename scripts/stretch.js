const content = document.querySelector('.page-content');
let isStretching = false;

window.addEventListener('scroll', () => {
  if (window.scrollY <= 0 && !isStretching) {
    // Apply the stretch effect
    isStretching = true;
    content.classList.add('stretch');
    
    // Remove the stretch after a short delay
    setTimeout(() => {
      content.classList.remove('stretch');
      isStretching = false;
    }, 200); // Adjust timing to control the snap-back speed
  }
});