var cpf;
var button = document.querySelector(".button-click");

button.addEventListener("click", function(event){
    cpf = document.querySelector('.input-name').value;
    cpf = cpf.replace(/\./g,"");
    console.log("O cpf é: " + cpf);
})