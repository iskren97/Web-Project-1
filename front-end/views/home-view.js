import { getThumbnails } from '../helpers/thumbnails.js';

export const homeView = () => {
  const main = document.querySelector('main');

  main.innerHTML = `
  <h1 class="gif-category">Editors picks:</h1>

          <!-- section Editors picks: -->
          <section class="gif-grid">

            <div class="gif-preview">
            <img class="thumbnail" src="icons/giphy.gif" alt="" />
            <div class="thumbnail-row">
            <p class="gif-info" style="margin-top: 5px">Author: Someone </p>
            <p class="gif-info">Date: date </p>
            <p class="gif-info">Tags: tags </p>
              <button class="like-btn">Like
                <i class="fa fa-fw fa-heart"></i>
              </button>
              </div>
            </div>


            <div class="gif-preview">
            <img class="thumbnail" src="icons/giphy.gif" alt="" />
            <div class="thumbnail-row">
            <p class="gif-info" style="margin-top: 5px">Author: Someone </p>
            <p class="gif-info">Date: date </p>
            <p class="gif-info">Tags: tags </p>
              <button class="like-btn">Like
                <i class="fa fa-fw fa-heart"></i>
              </button>
              </div>
            </div>

            <div class="gif-preview">
            <img class="thumbnail" src="icons/giphy.gif" alt="" />
            <div class="thumbnail-row">
            <p class="gif-info" style="margin-top: 5px">Author: Someone </p>
            <p class="gif-info">Date: date </p>
            <p class="gif-info">Tags: tags </p>
              <button class="like-btn">Like
                <i class="fa fa-fw fa-heart"></i>
              </button>
              </div>
            </div>

            <div class="gif-preview">
            <img class="thumbnail" src="icons/giphy.gif" alt="" />
            <div class="thumbnail-row">
            <p class="gif-info" style="margin-top: 5px">Author: Someone </p>
            <p class="gif-info">Date: date </p>
            <p class="gif-info">Tags: tags </p>
              <button class="like-btn">Like
                <i class="fa fa-fw fa-heart"></i>
              </button>
              </div>
            </div>

            <div class="gif-preview">
            <img class="thumbnail" src="icons/giphy.gif" alt="" />
            <div class="thumbnail-row">
            <p class="gif-info" style="margin-top: 5px">Author: Someone </p>
            <p class="gif-info">Date: date </p>
            <p class="gif-info">Tags: tags </p>
              <button class="like-btn">Like
                <i class="fa fa-fw fa-heart"></i>
              </button>
              </div>
            </div>

            <div class="gif-preview">
            <img class="thumbnail" src="icons/giphy.gif" alt="" />
            <div class="thumbnail-row">
            <p class="gif-info" style="margin-top: 5px">Author: Someone </p>
            <p class="gif-info">Date: date </p>
            <p class="gif-info">Tags: tags </p>
              <button class="like-btn">Like
                <i class="fa fa-fw fa-heart"></i>
              </button>
              </div>
            </div>

            <div class="gif-preview">
            <img class="thumbnail" src="icons/giphy.gif" alt="" />
            <div class="thumbnail-row">
            <p class="gif-info" style="margin-top: 5px">Author: Someone </p>
            <p class="gif-info">Date: date </p>
            <p class="gif-info">Tags: tags </p>
              <button class="like-btn">Like
                <i class="fa fa-fw fa-heart"></i>
              </button>
              </div>
            </div>

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
    const trendingContainer = document.querySelector('#trending');
    const resp1 = await fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=pixel&limit=14&offset=0&rating=g&lang=en'
    );

    const data1 = await resp1.json();

    data1.data.map((o) => {
      const username = o.username || 'No username';

      const html = `
      <div class="gif-preview">
      <img class="thumbnail" src="${o.images.original.url}" alt="" />
      <div class="thumbnail-row">
      <p class="gif-info" style="margin-top: 5px">Author: ${username} </p>
      <p class="gif-info">Uploaded on: ${o.import_datetime} </p>
      <p class="gif-info">Title: ${o.title} </p>
        <button class="like-btn">Like
          <i class="fa fa-fw fa-heart"></i>
        </button>
        </div>
      </div>
      `;

      trendingContainer.insertAdjacentHTML('beforeend', html);
    });

    getThumbnails();
  };
  getTrending();
};
