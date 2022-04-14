

export const generateView =(gif)=>{

  const username = gif.username || 'No username';
  return `
  <div class="gif-preview">
  <img class="thumbnail" src="${gif.images.original.url}" alt="" />
  <div class="thumbnail-row">
  <p class="gif-info" style="margin: 0.5em;overflow: clip;">Author: ${username} </p>
  <p class="gif-info">Uploaded on: ${gif.import_datetime} </p>
  <p class="gif-info">Title: ${gif.title} </p>
    <button class="like-btn">Like
      <i class="fa fa-fw fa-heart"></i>
    </button>
    </div>
  </div>
  `
}