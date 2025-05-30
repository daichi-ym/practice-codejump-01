'use strict';

{

  const icon = document.getElementById('humburger-icon');

  const toTopButton = document.getElementById('to-top-button');

  icon.addEventListener('click', () => {
    icon.parentElement.classList.toggle('open');
  });

  mask.addEventListener('click', () => {
    icon.click();
  });

  toTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
      toTopButton.classList.remove('hidden');
    } else {
      toTopButton.classList.add('hidden');
    }
  });

}