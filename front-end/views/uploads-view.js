import { q, create } from '../helpers/helpers.js';
import { getUploads } from '../helpers/uploads.js';
import { getThumbnails } from '../helpers/thumbnails.js';
import { generateView } from './single-gif-view.js';
import { request } from '../helpers/fetch.js';

export const uploadsView = async () => {
  const main = q('main');
  main.innerHTML = '';
  // Get the uploads from localStorage
  const uploads = getUploads().toString();

  if (uploads === '') {
    // Display that no gifs are here
    const message = create('h1');
    message.innerHTML = 'Error 404: You have no uploads to show';
    message.className = 'gif-category';
    main.appendChild(message);
  } else {
    // use get Gifs by id endpoint for all of the uploads
    const resultData = await request(
      `https://api.giphy.com/v1/gifs?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&ids=${uploads}`
    );

    const container = create('section');
    container.className = 'gif-grid';

    const containerTitle = create('h1');
    containerTitle.innerHTML = 'My GIFs:';
    containerTitle.className = 'gif-category';
    main.appendChild(containerTitle);

    main.appendChild(container);

    resultData.data.map((o) => {
      container.insertAdjacentHTML('beforeend', generateView(o));
    });

    getThumbnails();
  }
};
