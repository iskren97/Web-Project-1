import { homeView} from "../views/home-view.js"
import { trendingView} from "../views/trending-view.js"
import { uploadsView} from "../views/uploads-view.js"
import { favoritesView} from "../views/favorites-view.js"
import { uploadView} from "../views/upload-gif-view.js"

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
    r.style.setProperty('--font-color', "#DEA82B");
    r.style.setProperty('--font-background-color', '#222831');
    r.style.setProperty('--content-background', '#0F1724');
    r.style.setProperty('--header-color', '#DEA82B');
    r.style.setProperty('--header-border-color', 'rgba(199, 218, 211,0.5)');



  }else{
    r.style.setProperty('--font-color', '#C7DAD3');
    r.style.setProperty('--font-background-color', '#2f404f');
    r.style.setProperty('--content-background', 'white');
    r.style.setProperty('--header-color', '#2f404f');
    r.style.setProperty('--header-border-color', 'black');



  }
})





document.addEventListener('DOMContentLoaded', function() {

  console.log("READY")



})