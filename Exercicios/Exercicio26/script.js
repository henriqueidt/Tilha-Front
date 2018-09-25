document.getElementById("result").innerHTML = "Repeticao"

let repetitions = ["repeticao", "repeticao", "repeticao", "repeticao"]

repetitions.forEach(function(item) {
    document.getElementById("result").innerHTML += " " + item
});