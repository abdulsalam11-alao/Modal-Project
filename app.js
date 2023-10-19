'use strict'
let images = document.querySelectorAll(".images")
let modals = document.querySelector(".modal-img")
let modal=document.querySelector(".modal")
let remove=document.querySelector(".remove")
console.log(images);
console.log(modals);

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click",(event)=> {
        modals.src = images[i].src
        event.stopPropagation() 
        modal.style.display = "block"
        modal.style.background="white"
    })

    
}
remove.addEventListener("click", () => {
    modals.style.src = ""
    modal.style.display="none"
})
document.body.addEventListener("click", (e) => {
    e.stopPropagation()
    modals.src = ""
        modal.style.display = "none"
    
})