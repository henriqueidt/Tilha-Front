var button = document.querySelector("#button-click");

function discount(number1) {
    return number1 / 20;
}

button.addEventListener("click", function(event){

    var number1 = (document.querySelector('#number1').value)

    console.log("The discount is: " + discount(number1));
    result.value = discount(number1)
    
})







