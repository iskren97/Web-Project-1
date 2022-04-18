import { q, create } from "../helpers/helpers.js";
import { getThumbnails } from "../helpers/thumbnails.js";
import { generateView } from "./single-gif-view.js";
import { request } from "../helpers/fetch.js";

export const trendingView = () => {
  const main = q("main");
  main.innerHTML = "";

  (async () => {
    const resultData = await request(
      "https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=pixel&offset=0&rating=g&lang=en&limit=50"
    );

    const container = create("section");
    container.className = "gif-grid";

    const containerTitle = create("h1");
    containerTitle.innerHTML = "Trending GIFs:";
    containerTitle.className = "gif-category";
    main.appendChild(containerTitle);
    main.appendChild(container);

    resultData.data.map((o) => {
      container.insertAdjacentHTML("beforeend", generateView(o));
    });

    getThumbnails();
  })();
};
