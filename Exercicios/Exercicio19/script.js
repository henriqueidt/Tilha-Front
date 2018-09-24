var button = document.querySelector("#button-click");

function oddPair(number) {
    if (number%2 == 0) {
        return "pair"
    } else {
        return "odd"
    }
}

button.addEventListener("click", function(event){

    var soma1 = parseInt(document.querySelector('#soma1').value)
    console.log("The number is: " + oddPair(soma1));
    result.value = oddPair(soma1)
    
})







