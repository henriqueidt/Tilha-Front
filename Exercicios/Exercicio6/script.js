var image = document.querySelector(".lamp");

image.addEventListener("click", function(event){
    console.log("click");
    document.querySelector('.lamp').src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"
})