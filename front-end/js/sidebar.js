import { homeView} from "../views/home-view.js"
import { trendingView} from "../views/trending-view.js"
import { uploadsView} from "../views/uploads-view.js"
import { favoritesView} from "../views/favorites-view.js"
import { uploadView} from "../views/upload-view.js"

let btn = document.querySelector("#hamburger-btn");
let sidebar = document.querySelector(".sidebar");
let sidebarElements = Array.from(document.querySelectorAll(".sidebar-element"))
let darkModeButton = document.querySelector("#darkModeToggle")
let toggleButton = document.querySelector("#darkModeCheckbox")
let main = document.querySelector(".main")


sidebarElements.map(e=>{
    e.addEventListener("click", function(){
        if(e?.attributes[1]?.nodeValue == "toggle-button"){
        sidebar.classList.toggle("active")
        }

        if(e?.attributes[1]?.nodeValue == "trendingId"){
          trendingView();
        }

        if(e?.attributes[1]?.nodeValue == "homeId"){
          homeView();
        }
        if(e?.attributes[1]?.nodeValue == "favoritesId"){
          favoritesView();
        }
        if(e?.attributes[1]?.nodeValue == "myUploadsId"){
          uploadsView();
        }
        if(e?.attributes[1]?.nodeValue == "uploadGifId"){
          uploadView();
        }
    })

})


main.addEventListener("click", function(){
    sidebar.classList.remove("active")
})


darkModeButton.addEventListener("click", function(){

  let button = document.querySelector("#darkModeCheckbox")
  
  if(button.checked){
    button.checked = false;
  }else{
    button.checked = true;
  }

  var r = document.querySelector(':root');

  
  if(button.checked){
    r.style.setProperty('--font-color-light', 'green');
  }else{
    r.style.setProperty('--font-color-light', '#C7DAD3');
  }
})





document.addEventListener('DOMContentLoaded', function() {

  console.log("READY")



})