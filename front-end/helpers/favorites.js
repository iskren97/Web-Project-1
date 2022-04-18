let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Add a gif to favorites.
 * @param {String} gifId The id of the gif.
 */
export const addFavorite = (gifId) => {
  if (favorites.find((id) => id === gifId)) return;
  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Removes a gif from favorites.
 * @param {String} gifId The id of the gif.
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter((id) => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * @return {Array} Array of all gifs in favorites
 */
export const getFavorites = () => [...favorites];
