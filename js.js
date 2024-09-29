const container = document.querySelector('.projects-wrapper');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

let currentIndex = 0;

const updateProjectBoxes = () => {
  const projectBoxes = document.querySelectorAll('.project-box');
  const boxWidth = projectBoxes[0].offsetWidth + 20; // Include margin in width calculation
  container.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
};

rightBtn.addEventListener('click', () => {
  const projectBoxes = document.querySelectorAll('.project-box');
  if (currentIndex < projectBoxes.length - 1) { // Check if not at the last project box
    currentIndex++;
    updateProjectBoxes();
  }
});

leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) { // Check if not at the first project box
    currentIndex--;
    updateProjectBoxes();
  }
});
