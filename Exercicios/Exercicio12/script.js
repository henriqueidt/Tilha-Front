var green = document.querySelector("#button-green");
var red = document.querySelector("#button-red");

green.addEventListener("click", function(event){
   document.querySelector('.main').style.backgroundColor = "green";
})

red.addEventListener("click", function(event){
    document.querySelector('.main').style.backgroundColor = "red";
 })