var int;
var button = document.querySelector("#button-click");

button.addEventListener("click", function(event){

    var soma1 = parseInt(document.querySelector('#soma1').value)
    var soma2 = parseInt(document.querySelector('#soma2').value)

    if(!isNaN(soma1) && !isNaN(soma2)){
        int = soma1 + soma2;
        result.value = int;
        console.log("O resultado é: " + result.value);
    }
})