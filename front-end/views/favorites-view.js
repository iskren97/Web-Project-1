import { q, create } from '../helpers/helpers.js';
import { getFavorites } from '../helpers/favorites.js';
import { generateView } from './single-gif-view.js';
import { getThumbnails } from '../helpers/thumbnails.js';
import { request } from '../helpers/fetch.js';

export const favoritesView = async () => {
  const main = q('main');
  main.innerHTML = '';

  const containerTitle = create('h1');
  containerTitle.innerHTML = 'Favorite GIFs:';
  containerTitle.className = 'gif-category';
  main.appendChild(containerTitle);

  const container = create('section');
  container.id = 'favorites-section';
  main.appendChild(container);

  const arrOfFavorite = getFavorites();
  if (arrOfFavorite.length === 0) {
    container.innerHTML = '<p class="gif-category">Add some GiFs to favorites to see them here!</p>';
  } else {
    container.className = 'gif-grid';

    const favorite = arrOfFavorite.toString();

    const resultData = await request(
      `https://api.giphy.com/v1/gifs?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&ids=${favorite}`
    );

    resultData.data.map((o) => {
      container.insertAdjacentHTML('beforeend', generateView(o));
    });

    getThumbnails();
  }
};
