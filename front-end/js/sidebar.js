import { homeView } from '../views/home-view.js';
import { trendingView } from '../views/trending-view.js';
import { uploadsView } from '../views/uploads-view.js';
import { favoritesView } from '../views/favorites-view.js';
import { uploadView } from '../views/upload-gif-view.js';
import { q, qAll } from '../helpers/helpers.js';

export const sideBarLogic = () => {
  const sidebar = q('.sidebar');
  const sidebarElements = Array.from(qAll('.sidebar-element'));
  const darkModeButton = q('#darkModeToggle');
  const main = q('.main');

  sidebarElements.map((e) => {
    e.addEventListener('click', () => {
      if (e.id === 'toggle-button') {
        sidebar.classList.toggle('active');
      }

      if (e.id === 'trendingId') {
        trendingView();
      }
      if (e.id === 'homeId') {
        homeView();
      }
      if (e.id === 'favoritesId') {
        favoritesView();
      }
      if (e.id === 'myUploadsId') {
        uploadsView();
      }
      if (e.id === 'uploadGifId') {
        uploadView();
      }
    });
  });

  main.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });

  darkModeButton.addEventListener('click', () => {
    const button = q('#darkModeCheckbox');

    if (button.checked) {
      button.checked = false;
    } else {
      button.checked = true;
    }

    const r = q(':root');

    if (button.checked) {
      // Dark Mode

      r.style.setProperty('--font-color', '#DEA82B');
      r.style.setProperty('--font-background-color', '#222831');
      r.style.setProperty('--content-background', '#0F1724');
      r.style.setProperty('--header-color', '#DEA82B');
      r.style.setProperty('--header-border-color', 'rgba(199, 218, 211,0.5)');
      r.style.setProperty(
        '--sidebar-icon-color',
        'invert(88%) sepia(21%) saturate(3721%) hue-rotate(339deg) brightness(93%) contrast(86%)'
      );
      r.style.setProperty(
        '--sidebar-icon-color-hover',
        'invert(11%) sepia(25%) saturate(573%) hue-rotate(176deg) brightness(98%) contrast(89%)'
      );
      r.style.setProperty('--search-bar-background-color', '#787773');
      r.style.setProperty('--gradient-color1', '#DEA82B');
      r.style.setProperty('--gradient-color2', '#FFFF00');
      r.style.setProperty('--gradient-color3', '#787773');
      r.style.setProperty('--gradient-color4', '#222831');
      r.style.setProperty('--search-button-color', '#DEA82B');
    } else {
      // Light Mode

      r.style.setProperty('--font-color', '#C7DAD3');
      r.style.setProperty('--font-background-color', '#2f404f');
      r.style.setProperty('--content-background', 'white');
      r.style.setProperty('--header-color', '#2f404f');
      r.style.setProperty('--header-border-color', 'black');
      r.style.setProperty(
        '--sidebar-icon-color',
        'invert(93%) sepia(12%) saturate(197%) hue-rotate(106deg) brightness(92%) contrast(88%)'
      );
      r.style.setProperty(
        '--sidebar-icon-color-hover',
        'invert(20%) sepia(19%) saturate(944%) hue-rotate(166deg) brightness(95%) contrast(86%)'
      );
      r.style.setProperty(
        '--search-bar-background-color',
        'rgb(207, 216, 226)'
      );
      r.style.setProperty('--gradient-color1', '#201261');
      r.style.setProperty('--gradient-color2', '#203886');
      r.style.setProperty('--gradient-color3', '#5159c7');
      r.style.setProperty('--gradient-color4', '#88addf');
      r.style.setProperty('--search-button-color', 'white');
    }
  });
};
