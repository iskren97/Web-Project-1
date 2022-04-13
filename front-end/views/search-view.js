export const searchView = () => {
  const main = document.querySelector("main");
  const searchBtn = document.querySelector("#searchBtn");

  let searchFunc = async function () {
    const searchValue = document.querySelector("#search-field").value;
    main.innerHTML = "";

    const title = document.createElement("h1");
    title.innerHTML = "Search results for: " + searchValue;
    title.className = "gif-category";
    main.appendChild(title);

    const section = document.createElement("section");
    section.className = "gif-grid";
    main.appendChild(section);

    let searchWord = "pixel " + searchValue;
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
      section.insertAdjacentHTML("beforeend", html);
    });

    const gifThumbnails = document.querySelectorAll(".gif-preview");

    Array.from(gifThumbnails).forEach((el) => {
      const likeBtn = el.children[1];

      el.addEventListener("mouseover", () => {
        if (likeBtn) {
          likeBtn.style.opacity = 1;
        }
      });

      el.addEventListener("mouseout", () => {
        if (likeBtn) {
          likeBtn.style.opacity = 0;
        }
      });
    });
  };

  searchBtn.addEventListener("click", searchFunc);

  let searchField = document.querySelector("#search-field");

  searchField.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchBtn.click();
    }
  });
};
