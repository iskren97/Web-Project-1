const trendingContainer = document.querySelector('#trending');

const getTrending = async () => {
  const resp1 = await fetch(
    'https://api.giphy.com/v1/gifs/trending?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&limit=21&rating=g'
  );

  const data1 = await resp1.json();

  console.log(data1.data);

  data1.data.map((o) => {
    const html = `
    <div class="gif-preview">
      <img class="thumbnail" src="${o.images.original.url}" alt="" />
      <button class="like-btn">
      <i class="fa fa-fw fa-heart"></i>
    </button>
    </div>
    `;

    trendingContainer.insertAdjacentHTML('beforeend', html);
  });
};
getTrending();
