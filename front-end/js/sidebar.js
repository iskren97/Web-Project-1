let btn = document.querySelector("#hamburger-btn");
let sidebar = document.querySelector(".sidebar");
let sidebarElements = Array.from(document.querySelectorAll(".sidebar-element"))



sidebarElements.map(e=>{
    e.addEventListener("click", function(){
        if(e?.attributes[1]?.nodeValue == "toggle-button"){
        sidebar.classList.toggle("active")
        }
    })

})






document.addEventListener('DOMContentLoaded', function() {

  console.log("READY")



})