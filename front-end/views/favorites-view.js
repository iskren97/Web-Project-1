import { q } from '../helpers/helpers.js';
import { getFavorites } from '../helpers/favorites.js';
import { generateView } from './single-gif-view.js';
import { getThumbnails } from '../helpers/thumbnails.js';
export const favoritesView = async() =>{
  const main = q("main")
  main.innerHTML = "";
  
  const arrOfFavorite = getFavorites();

  const containerTitle = document.createElement('h1');
  containerTitle.innerHTML = 'Favorite GIFs:';
  containerTitle.className = "gif-category";
  
  const container = document.createElement("section");
  container.className = "gif-grid";
  main.appendChild(containerTitle);
  main.appendChild(container);
  
  if(arrOfFavorite.length === 0) {
    container.innerHTML = '<p class="gif-category">Add some GiFs to favorites to see them here!</p>'
  } else {
    const favorite = arrOfFavorite.toString();

    // use get gifs by id endpoint for all of the uploads
    const response = await fetch(
      `https://api.giphy.com/v1/gifs?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&ids=${favorite}`
      );
    const resultData = await response.json(); 
     
    resultData.data.map((o) => {
      const html = generateView(o);
      container.insertAdjacentHTML('beforeend', html);
    });
    
    getThumbnails();
  }


  
}