import { q } from "../helpers/helpers.js";
import { getThumbnails } from "../helpers/thumbnails.js";
import { generateView } from "./single-gif-view.js";

export const searchView = () => {
  const main = q("main");
  const searchBtn = q("#searchBtn");
  const searchField = q("#search-field");

  let searchFunc = async function () {
    const searchValue = q("#search-field").value;
    main.innerHTML = "";

    if (searchValue == "") {
      const message = document.createElement("h1");
      message.innerHTML = "Error 404: Please enter a valid search term";
      message.className = "gif-category";
      main.appendChild(message);
      return;
    } else {
      const title = document.createElement("h1");
      title.innerHTML = "Search results for: " + searchValue;
      title.className = "gif-category";
      main.appendChild(title);

      const section = document.createElement("section");
      section.className = "gif-grid";
      main.appendChild(section);

      const searchWord = "pixel " + searchValue;
      const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&q=${searchWord}&limit=50&offset=0&rating=G&lang=en`;

      const res = await fetch(searchUrl).then((res) => res.json());

      res.data.map((gif) => {
        const html = generateView(gif);
        section.insertAdjacentHTML("beforeend", html);
      });
      searchField.value = "";

      getThumbnails();
    }
  };

  searchBtn.addEventListener("click", searchFunc);

  searchField.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchBtn.click();
      searchField.value = "";
    }
  });
};
