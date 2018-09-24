var int;
var button = document.querySelector("#button-click");

function adder(sum1, sum2) {
    if(sum1 != null && sum2 != null){
    return sum1 + sum2;
    } else {
        return 0;
    }
}

button.addEventListener("click", function(event){

    var soma1 = parseInt(document.querySelector('#soma1').value)
    var soma2 = parseInt(document.querySelector('#soma2').value)
        
        console.log("O resultado é: " + adder(soma1, soma2));
        result.value = adder(soma1, soma2)
})


