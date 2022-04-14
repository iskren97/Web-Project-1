import { q } from "../helpers/helpers.js";
import { getUploads } from "../helpers/uploads.js";
import { getThumbnails } from "../helpers/thumbnails.js";
import { generateView } from "./single-gif-view.js";

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
    const html = generateView(o);

    container.insertAdjacentHTML("beforeend", html);
  });

  main.appendChild(container);

  getThumbnails();
};
