// const gifArea = document.querySelector('.gif-thumbnail');
const likeBtn = document.querySelectorAll('.like-btn');

// gifArea.addEventListener('mouseover', () => {
//   likeBtn.style.opacity = 1;
// });

// gifArea.addEventListener('mouseout', () => {
//   likeBtn.style.opacity = 0;
// });

console.log(likeBtn);

Array.from(document.querySelectorAll('.gif-thumbnail')).forEach((el) =>
  el.addEventListener('click', (e) => {
    const firstChild = el.firstChild.nodeName;

    console.log(e);
  })
);
