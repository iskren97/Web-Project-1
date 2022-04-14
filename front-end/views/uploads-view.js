import { q } from "../helpers/helpers.js";
import { getUploads } from "../helpers/uploads.js";
import { getThumbnails } from "../helpers/thumbnails.js";

export const uploadsView = async () => {
  const main = q("main");
  main.innerHTML = "";
  // get the uploads from localStorage
  const uploads = getUploads().toString();

  // use get gifs by id endpoint for all of the uploads
  const response = await fetch(
    `https://api.giphy.com/v1/gifs?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&ids=${uploads}`
  );

  const resultData = await response.json();

  const container = document.createElement("section");
  container.className = "gif-grid";

  const containerTitle = document.createElement("h1");
  containerTitle.innerHTML = "my gifs:";
  containerTitle.className = "gif-category";

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

    container.insertAdjacentHTML("beforeend", html);
  });

  main.appendChild(container);

  getThumbnails();
};
