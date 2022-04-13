import { q } from '../helpers/helpers.js';
import { getThumbnails } from '../helpers/thumbnails.js';
export const trendingView = () => {
  const main = q('main');

  const getAllTrendingData = async () => {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&limit=25&rating=g'
    );
    const resultData = await response.json();
    main.innerHTML = '';

    const container = document.createElement('section');
    container.className = 'gif-grid';

    resultData.data.map((o) => {
      const html = `
      <div class="gif-preview">
        <img class="thumbnail" src="${o.images.original.url}" alt="" />
        <button class="like-btn">
        <i class="fa fa-fw fa-heart"></i>
      </button>
      </div>
      `;

      container.insertAdjacentHTML('beforeend', html);
    });

    main.appendChild(container);

    getThumbnails();
  };
  return getAllTrendingData();
};
