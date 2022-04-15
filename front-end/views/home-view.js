import { q } from '../helpers/helpers.js';
import { getThumbnails } from '../helpers/thumbnails.js';
import { generateView } from './single-gif-view.js';
export const homeView = () => {
  const main = q('main');

  main.innerHTML = `
  <h1 class="gif-category">Editors picks:</h1>

          <section class="gif-grid" id="editors">

          
          </section>

          <h1 class="gif-category">Trending:</h1>

          
          <section class="gif-grid" id="trending">
          
          </section>

          <h1 class="gif-category">Explore:</h1>


          <section class="gif-grid" id="explore">
           
          </section>
          
          <div class="loader" id="loader">
          <img src="icons/loader.svg" alt="Loading" />
          </div>
  `;
  const getTrending = async () => {
    const trendingContainer = q('#trending');
    const resp1 = await fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=pixel&limit=14&offset=0&rating=g&lang=en'
    );

    const data1 = await resp1.json();

    data1.data.map((o) => {
      const html = generateView(o);

      trendingContainer.insertAdjacentHTML('beforeend', html);
    });

    getThumbnails();
  };
  getTrending();

  const getEditorsPicks = async () => {
    const editorsContainer = q('#editors');
    const resp1 = await fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=pixel world&limit=6&offset=0&rating=g&lang=en'
    );
    const data1 = await resp1.json();

    data1.data.map((o) => {
      const editorsPicks = generateView(o);

      editorsContainer.insertAdjacentHTML('beforeend', editorsPicks);
    });

    getThumbnails();
  };
  getEditorsPicks();

  const getExplore = () => {
    const exploreContainer = q('#explore');
    const loader = q('#loader');
    const body = q('.main');

    let offset = 0;

    const getGifs = async () => {
      const resp1 = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=pixel art&limit=7&offset=${offset}&rating=g&lang=en`
      );

      const data1 = resp1.json();

      return data1;
    };

    const showGifs = async () => {
      const gifs = await getGifs();

      gifs.data.map((o) => {
        const html = generateView(o);

        exploreContainer.insertAdjacentHTML('beforeend', html);
      });

      getThumbnails();
    };
    showGifs();

    const showLoading = () => {
      loader.classList.add('show');

      setTimeout(() => {
        loader.classList.remove('show');

        setTimeout(() => {
          offset = offset + 25;
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
  };

  getExplore();
};
