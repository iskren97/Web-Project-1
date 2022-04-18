import { q, create } from '../helpers/helpers.js';
import { getThumbnails } from '../helpers/thumbnails.js';
import { generateView } from './single-gif-view.js';
import { request } from '../helpers/fetch.js';


/**
 * Generates the search view.
 */
export const searchView = () => {
  const main = q('main');
  const searchBtn = q('#searchBtn');
  const searchField = q('#search-field');

  const searchFunc = async () => {
    const searchValue = q('#search-field').value;
    main.innerHTML = '';

    if (searchValue === '') {
      const message = create('h1');

      message.innerHTML = 'Please enter a valid search term!';
      message.className = 'gif-category';
      main.appendChild(message);

      return;
    } else {
      const title = create('h1');
      title.innerHTML = 'Search results for: ' + searchValue;
      title.className = 'gif-category';
      main.appendChild(title);

      const section = create('section');
      section.className = 'gif-grid';
      main.appendChild(section);

      const searchWord = 'pixel ' + searchValue;

      const resultData = await request(
        `https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=${searchWord}&limit=50&offset=0&rating=G&lang=en`
      );

      resultData.data.map((gif) => {
        section.insertAdjacentHTML('beforeend', generateView(gif));
      });

      searchField.value = '';

      getThumbnails();
    }
  };

  searchBtn.addEventListener('click', searchFunc);

  searchField.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchBtn.click();
      searchField.value = '';
    }
  });
};
