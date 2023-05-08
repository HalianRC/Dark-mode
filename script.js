let buttonToggle = document.querySelector(".button-toggle")
let body = document.body
let classStyle = "dark-mode"

buttonToggle.addEventListener("click", function(){
  body.classList.toggle(classStyle)
})