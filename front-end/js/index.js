import { homeView } from '../views/home-view.js';
import { searchView } from '../views/search-view.js';
import { hideBorder } from './header-border.js';
import { sideBarLogic } from '../js/sidebar.js';

homeView();
searchView();
hideBorder();
sideBarLogic();
