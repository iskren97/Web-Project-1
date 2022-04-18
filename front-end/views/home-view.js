import { q } from '../helpers/helpers.js';
import { getThumbnails } from '../helpers/thumbnails.js';
import { generateView } from './single-gif-view.js';
import { request } from '../helpers/fetch.js';
export const homeView = () => {
  const main = q('main');

  main.innerHTML = `
          <h1 class="gif-category">Editors picks:</h1>
          <section class="gif-grid" id="editors"></section>
          <h1 class="gif-category">Trending:</h1>         
          <section class="gif-grid" id="trending"></section>
          <h1 class="gif-category">Explore:</h1>
          <section class="gif-grid" id="explore"></section>        
          <div class="loader" id="loader">
            <img src="icons/loader.svg" alt="Loading" />
          </div>
  `;

  (async () => {
    const editorsContainer = q('#editors');
    const resultData = await request(
      'https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=pixel world&limit=6&offset=0&rating=g&lang=en'
    );

    resultData.data.map((o) => {
      editorsContainer.insertAdjacentHTML('beforeend', generateView(o));
    });
    getThumbnails();
  })();

  (async () => {
    const trendingContainer = q('#trending');
    const resultData = await request(
      'https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=pixel&limit=12&offset=0&rating=g&lang=en'
    );

    resultData.data.map((o) => {
      trendingContainer.insertAdjacentHTML('beforeend', generateView(o));
    });
    getThumbnails();
  })();

  (() => {
    const exploreContainer = q('#explore');
    const loader = q('#loader');
    const body = q('.main');
    let offset = 0;

    const showGifs = async () => {
      const gifs = await request(
        `https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=pixel art&limit=12&offset=${offset}&rating=g&lang=en`
      );

      gifs.data.map((o) => {
        exploreContainer.insertAdjacentHTML('beforeend', generateView(o));
      });

      getThumbnails();
    };

    showGifs();

    const showLoading = () => {
      loader.classList.add('show');
      setTimeout(() => {
        loader.classList.remove('show');

        setTimeout(() => {
          offset += 25;
          showGifs();
        }, 1000);
      }, 3000);
    };

    body.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = body;
      if (scrollTop + clientHeight >= scrollHeight - 6) {
        showLoading();
      }
    });
  })();
};
