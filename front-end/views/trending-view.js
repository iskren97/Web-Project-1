import { q } from '../helpers/helpers.js';
import { getThumbnails } from '../helpers/thumbnails.js';
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
    containerTitle.innerHTML = 'trending gifs:';
    containerTitle.className = 'gif-category';

    main.appendChild(containerTitle);

    resultData.data.map((o) => {
      const html = `
      <div class="gif-preview">
      <img class="thumbnail" src="${o.images.original.url}" alt="" />
      <div class="thumbnail-row">
      <p class="gif-info" style="margin-top: 5px">Author: Someone </p>
      <p class="gif-info">Date: date </p>
      <p class="gif-info">Tags: tags </p>
        <button class="like-btn">Like
          <i class="fa fa-fw fa-heart"></i>
        </button>
        </div>
      </div>
      `;

      container.insertAdjacentHTML('beforeend', html);
    });

    main.appendChild(container);

    getThumbnails();
  };
  return getAllTrendingData();
};
