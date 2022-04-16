import { q } from "../helpers/helpers.js";
import { getUploads } from "../helpers/uploads.js";
import { getThumbnails } from "../helpers/thumbnails.js";
import { generateView } from "./single-gif-view.js";

export const uploadsView = async () => {
  const main = q("main");
  main.innerHTML = "";
  // Get the uploads from localStorage
  const uploads = getUploads().toString();

  if (uploads == "") {
  // Display that no gifs are here
    const message = document.createElement("h1");
    message.innerHTML = "Error 404: You have no uploads to show";
    message.className = "gif-category";
    main.appendChild(message);
  } else {
    // use get gifs by id endpoint for all of the uploads
    const response = await fetch(
      `https://api.giphy.com/v1/gifs?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&ids=${uploads}`
    );

    const resultData = await response.json();

    const container = document.createElement("section");
    container.className = "gif-grid";

    const containerTitle = document.createElement("h1");
    containerTitle.innerHTML = "My GIFs:";
    containerTitle.className = "gif-category";

    main.appendChild(containerTitle);

    resultData.data.map((o) => {
      const html = generateView(o);

      container.insertAdjacentHTML("beforeend", html);
    });

    main.appendChild(container);

    getThumbnails();
  }
};
