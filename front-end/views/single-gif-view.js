export const generateView = (gif) => {
  //generate the gif HTML structure
  const username = gif.username || 'No username';
  let title = gif.title || 'pixel gif';

  if(title.length > 40){
    title = title.slice(0, 40) + '...';
  }

  return `
  <div class="gif-preview" data-gif-id="${gif.id}">
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
