import { q } from '../helpers/helpers.js';
import { getThumbnails } from '../helpers/thumbnails.js';

export const searchView = () => {
  const main = q('main');
  const searchBtn = q('#searchBtn');
  const searchField = q('#search-field');

  let searchFunc = async function () {
    const searchValue = q('#search-field').value;
    main.innerHTML = '';

    if (searchValue == '') {
      const error = document.createElement('h1');
      error.innerHTML = 'ERROR 404: Please enter a valid search term';
      error.className = 'gif-category';
      main.appendChild(error);
      return;
    } else {
      const title = document.createElement('h1');
      title.innerHTML = 'Search results for: ' + searchValue;
      title.className = 'gif-category';
      main.appendChild(title);

      const section = document.createElement('section');
      section.className = 'gif-grid';
      main.appendChild(section);

      let searchWord = 'pixel ' + searchValue;
      const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=${searchWord}&limit=50&offset=0&rating=G&lang=en`;

      let res = await fetch(searchUrl).then((res) => res.json());

      res.data.map((gif) => {
        const username = gif.username || 'No username';

        const html = `
      <div class="gif-preview">
      <img class="thumbnail" src="${gif.images.fixed_height.url}" alt="" />
      <div class="thumbnail-row">
      <p class="gif-info" style="margin-top: 5px">Author: ${username} </p>
      <p class="gif-info">Uploaded on: ${gif.import_datetime} </p>
      <p class="gif-info">Title: ${gif.title} </p>
        <button class="like-btn">Like
          <i class="fa fa-fw fa-heart"></i>
        </button>
        </div>
      </div>
      `;
        section.insertAdjacentHTML('beforeend', html);
      });
      searchField.value = '';

      getThumbnails();
    }
  };

  searchBtn.addEventListener('click', searchFunc);

  searchField.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchBtn.click();
      searchField.value = '';
    }
  });
};
