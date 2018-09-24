var name;
var button = document.querySelector(".button-click");

button.addEventListener("click", function(event){
    name = document.querySelector('.input-name').value;
    console.log(name.length);
})