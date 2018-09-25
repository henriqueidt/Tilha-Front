var randomNumber = Math.ceil(Math.random() * 3000)
var button = document.querySelector("#button-click")

console.log(randomNumber)

button.addEventListener("click", function(event){

    var numberInput = (document.querySelector("#number1").value)


    randomNumber == numberInput 
        ? teste()
        : alert("errou!")
})

const teste = function() {
    alert("Acertou")
    alert("mizeravi")

    if (1 === 1) {
        alert("true")
    }
}