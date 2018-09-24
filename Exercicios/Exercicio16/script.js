var int;
var button = document.querySelector("#button-click");

function adder(sum1, sum2) {
    return sum1 + sum2;
}

button.addEventListener("click", function(event){

    var soma1 = parseInt(document.querySelector('#soma1').value)
    var soma2 = parseInt(document.querySelector('#soma2').value)

    if(!isNaN(soma1) && !isNaN(soma2)){
        
        console.log("O resultado é: " + adder(soma1, soma2));
        result.value = adder(soma1, soma2)
    }
})


