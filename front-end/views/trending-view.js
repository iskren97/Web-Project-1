import { q } from '../helpers/helpers.js';
import { getThumbnails } from '../helpers/thumbnails.js';
import { generateView } from './single-gif-view.js';

export const trendingView = () => {
  const main = q('main');
  main.innerHTML = '';

  const getAllTrendingData = async () => {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=pixel&offset=0&rating=g&lang=en'
    );

    const resultData = await response.json();

    const container = document.createElement('section');
    container.className = 'gif-grid';

    const containerTitle = document.createElement('h1');
    containerTitle.innerHTML = 'Trending GIFs:';
    containerTitle.className = 'gif-category';

    main.appendChild(containerTitle);

    resultData.data.map((o) => {
      const username = o.username || 'No username';

      const html = generateView(o)

      container.insertAdjacentHTML('beforeend', html);
    });

    main.appendChild(container);

    getThumbnails();
  };
  return getAllTrendingData();
};
