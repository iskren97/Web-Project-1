export const request = async (api) => {
  const response = await fetch(api);
  const result = response.json();

  return result;
};
