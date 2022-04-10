let btn = document.querySelector("#hamburger-btn");
let sidebar = document.querySelector(".sidebar");
let sidebarElements = Array.from(document.querySelectorAll(".sidebar-element"))

let darkModeButton = document.querySelector("#darkModeToggle")



sidebarElements.map(e=>{
    e.addEventListener("click", function(){
        if(e?.attributes[1]?.nodeValue == "toggle-button"){
        sidebar.classList.toggle("active")
        }
    })

})




darkModeButton.addEventListener("click", function(){

  let button = document.querySelector("#darkModeCheckbox")
  
  if(button.checked){
    button.checked = false;
  }else{
    button.checked = true;
  }

  
})





document.addEventListener('DOMContentLoaded', function() {

  console.log("READY")



})