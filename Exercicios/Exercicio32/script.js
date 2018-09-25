function myFunction(parameter) {
    var searchDota = parameter.search("Dota")

    if (searchDota == 0){
        document.getElementById("result").innerHTML = "true"
    } else
        document.getElementById("result").innerHTML = "false"
};

myFunction("Dota é melhor que lol")