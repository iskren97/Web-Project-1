export const generateView = (gif) => {
  const username = gif.username || 'No username';
  const title = gif.title || 'pixel gif';

  return `
  <div class="gif-preview">
  <img class="thumbnail" src="${gif.images.original.url}" alt="" />
  <div class="thumbnail-row">
  <p class="gif-info" >Author: ${username} </p>
  <p class="gif-info">Uploaded on: ${gif.import_datetime} </p>
  <p class="gif-info">Title: ${title} </p>
    <button class="like-btn">Like
      <i class="fa fa-fw fa-heart"></i>
    </button>
    </div>
  </div>
  `;
};
