const MenuBar = document.getElementById("MenuBar");
const cancel = document.getElementById("cancel");
const MobileMenu = document.getElementById("MobMenu");

MenuBar.addEventListener("click",()=>{
    MobileMenu.classList.toggle("hidden");
    
})

cancel.addEventListener("click",()=>{
    MobileMenu.classList.toggle("hidden");
    
})