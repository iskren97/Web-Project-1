import { q } from '../helpers/helpers.js';
import { getThumbnails } from '../helpers/thumbnails.js';

export const searchView = () => {
  const main = q('main');
  const searchBtn = q('#searchBtn');

  let searchFunc = async function () {
    const searchValue = q('#search-field').value;
    main.innerHTML = '';

    const title = document.createElement('h1');
    title.innerHTML = 'Search results for: ' + searchValue;
    title.className = 'gif-category';
    main.appendChild(title);

    const section = document.createElement('section');
    section.className = 'gif-grid';
    main.appendChild(section);

    let searchWord = 'pixel ' + searchValue;
    const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=${searchWord}&limit=25&offset=0&rating=G&lang=en`;

    let res = await fetch(searchUrl).then((res) => res.json());

    res.data.map((gif) => {
      const html = `
      <div class="gif-preview">
        <img class="thumbnail" src="${gif.images.fixed_height.url}" alt="" />
        <button class="like-btn">
          <i class="fa fa-fw fa-heart"></i>
        </button>
      </div>
      `;
      section.insertAdjacentHTML('beforeend', html);
    });

    getThumbnails();
  };

  searchBtn.addEventListener('click', searchFunc);

  let searchField = q('#search-field');

  searchField.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchBtn.click();
    }
  });
};
