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