
export const homeView = () =>{
  const main = document.querySelector("main")

  main.innerHTML = `
  <h1 class="gif-category">Editors picks:</h1>

          <!-- section Editors picks: -->
          <section class="gif-grid">
            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>
          </section>

          <h1 class="gif-category">Trending:</h1>

          
          <section class="gif-grid" id="trending">
          
          </section>

          <h1 class="gif-category">Favorites:</h1>
          <section class="gif-grid">
            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>
          </section>

          <h1 class="gif-category">Uploads:</h1>
          <section class="gif-grid">
            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>

            <div class="gif-preview">
              <img class="thumbnail" src="icons/giphy.gif" alt="" />
              <button class="like-btn">
                <i class="fa fa-fw fa-heart"></i>
              </button>
            </div>
          </section>
  `

  const trendingContainer = document.querySelector('#trending');
  const getTrending = async () => {
    const resp1 = await fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5&limit=21&rating=g'
    );
  
    const data1 = await resp1.json();
  

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
  
  
    const gifThumbnails = document.querySelectorAll('.gif-preview');
  
    Array.from(gifThumbnails).forEach((el) => {
      const likeBtn = el.children[1];
    
      el.addEventListener('mouseover', () => {
        if (likeBtn) {
          likeBtn.style.opacity = 1;
        }
      });
    
      el.addEventListener('mouseout', () => {
        if (likeBtn) {
          likeBtn.style.opacity = 0;
        }
      });
    });
  };
  getTrending();

}