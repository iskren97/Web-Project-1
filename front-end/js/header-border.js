const border = document.querySelector('.border-bottom');
const body = document.querySelector('.main');

body.addEventListener('scroll', () => {
  console.log(body.scrollTop === 0);

  if (body.scrollTop !== 0) border.style.opacity = 0;
  else border.style.opacity = 1;
});
