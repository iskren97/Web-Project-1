/**
 * Makes a request with provided API
 * @param {String} api API request info
 * @return {Promise} Response
 */
export const request = async (api) => {
  const response = await fetch(api);
  const result = response.json();

  return result;
};
