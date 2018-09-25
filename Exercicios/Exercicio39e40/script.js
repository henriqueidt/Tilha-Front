var button = document.querySelector("#button-click")

var nomes = []
var i = 0;

button.addEventListener("click", function(event) {
    var textInput = (document.querySelector("#inputName").value)
    nomes.push(textInput)
    
    while(i < nomes.length){
        if(i % 2 == 0){
            document.getElementById("nomes").innerHTML += `<li> <strong>${nomes[i]}</strong> </li>`
        } else {
            document.getElementById("nomes").innerHTML += `<li> ${nomes[i]} </li>`
        }
        i++;
    }
})