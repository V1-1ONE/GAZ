const slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    index += i;
    if (index < 0) {
      index = slide.length - 1;
    } else if (index >= slide.length) {
      index = 0;
    }
    slides.style.transform = 'translateX(' + (-index * 100) + '%)';
  }

  prev.addEventListener('click', () => showSlide(-1));
  next.addEventListener('click', () => showSlide(1));