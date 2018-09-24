var button = document.querySelector("#button-click");

function underAge(number1) {
    if (number1 <= 2000) {
        return "above age"
    } else {
        return "under age"
    }
}

button.addEventListener("click", function(event){

    var number1 = (document.querySelector('#number1').value)

    console.log("The discount is: " + underAge(number1));
    result.value = underAge(number1)
    
})







