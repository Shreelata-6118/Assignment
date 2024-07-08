document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider-inner');
  const slides = document.querySelectorAll('.slide');
  const leftButtons = document.querySelectorAll('.slide .key:nth-child(1)');
  const rightButtons = document.querySelectorAll('.slide .key:nth-child(3)');
  let index = 0;

  function showSlide(i) {
      if (i >= slides.length) {
          index = 0;
      } else if (i < 0) {
          index = slides.length - 1;
      }
      slider.style.transform = `translateX(${-index * 100}%)`;
  }

  leftButtons.forEach(button => {
      button.addEventListener('click', () => {
          index--;
          showSlide(index);
      });
  });

  rightButtons.forEach(button => {
      button.addEventListener('click', () => {
          index++;
          showSlide(index);
      });
  });

});
