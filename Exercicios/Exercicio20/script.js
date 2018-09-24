var button = document.querySelector("#button-click");

function multiplication(number1, number2) {
    return number1 * number2
}

button.addEventListener("click", function(event){

    var number1 = (document.querySelector('#number1').value)
    var number2 = (document.querySelector('#number2').value)

    console.log("The number is: " + multiplication(number1, number2));
    result.value = multiplication(number1, number2)
    
})







