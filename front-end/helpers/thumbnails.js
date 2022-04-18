import { qAll } from './helpers.js';
import { addFavorite, removeFavorite, getFavorites } from './favorites.js';
import { favoritesView } from '../views/favorites-view.js';
export const getThumbnails = () => {
  const gifThumbnails = qAll('.gif-preview');
  const favorites = getFavorites();

  Array.from(gifThumbnails).forEach((el) => {
    const likeBtn = el.children[1];

    const elId = el.dataset.gifId;

    el.addEventListener('mouseover', () => {
      if (likeBtn) {
        likeBtn.style.opacity = 1;
      }
      if (favorites.includes(elId)) {
        likeBtn.children[3].children[0].style.setProperty('color', 'red');
      }
    });

    el.addEventListener('mouseout', () => {
      if (likeBtn) {
        likeBtn.style.opacity = 0;
      }
    });
  });

  const button = qAll('.like-btn');

  Array.from(button).forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
      const gifId
        = likeButton.parentElement.parentElement.attributes[1].nodeValue;
      if (favorites.includes(gifId)) {
        removeFavorite(gifId);
        if (
          likeButton.parentNode.parentElement.parentElement.id
          === 'favorites-section'
        ) {
          favoritesView();
        }
      } else {
        addFavorite(gifId);
      }
    });
  });
};
