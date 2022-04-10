const gifThumbnails = document.querySelectorAll('.gif-preview');

Array.from(gifThumbnails).forEach((el) => {
  const likeBtn = el.children[1];

  el.addEventListener('mouseover', () => {
    if (likeBtn) {
      likeBtn.style.opacity = 1;
    }
  });

  el.addEventListener('mouseout', () => {
    if (likeBtn) {
      likeBtn.style.opacity = 0;
    }
  });
});
