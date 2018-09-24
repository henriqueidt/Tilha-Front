var image = document.querySelector(".lamp");

image.addEventListener("mouseover", function(event){
    console.log("mouseover");
    document.querySelector('.lamp').src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"
})