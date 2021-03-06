const border = document.querySelector('.border-bottom');
const body = document.querySelector('.main');


/**
 * Hides the border when scrolling.
 */
export const hideBorder = () => {
  body.addEventListener('scroll', () => {
    if (body.scrollTop !== 0) {
      border.style.opacity = 0;
    } else {
      border.style.opacity = 1;
    }
  });
};
