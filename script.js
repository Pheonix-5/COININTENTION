let ham = document.querySelector(".ham_menu");

ham.addEventListener("click",() =>{
    var menu = document.querySelector(".mobil_list");
    var attr = menu.getAttribute("data-visible");
   if (attr == "false"){
        menu.setAttribute("data-visible", true)
   }
   else{
        menu.setAttribute("data-visible", false)
   }

})