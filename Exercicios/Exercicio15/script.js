var button = document.querySelector("#click-button")

button.addEventListener("click", function(event){
   var text = document.createTextNode("Esse html veio do JavaScript...")
   document.getElementById("result").innerHTML = text.textContent
})
