import { q } from '../helpers/helpers.js';
import { getThumbnails } from '../helpers/thumbnails.js';
import { generateView } from './single-gif-view.js';
export const homeView = () => {
  const main = q('main');

  main.innerHTML = `
  <h1 class="gif-category">Editors picks:</h1>

          <!-- section Editors picks: -->
          <section class="gif-grid" id="editors">

          
          </section>

          <h1 class="gif-category">Trending:</h1>

          
          <section class="gif-grid" id="trending">
          
          </section>

          <h1 class="gif-category">Favorites:</h1>
          <section class="gif-grid">
            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>
          </section>

          <h1 class="gif-category">Uploads:</h1>
          <section class="gif-grid">
            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>
          </section>
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
      'https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=pixel artists&limit=7&offset=0&rating=g&lang=en'
    );
    const data1 = await resp1.json();

    data1.data.map((o) => {
      const editorsPicks = generateView(o);

      editorsContainer.insertAdjacentHTML('beforeend', editorsPicks);
    });

    getThumbnails();
  };
  getEditorsPicks();
};
