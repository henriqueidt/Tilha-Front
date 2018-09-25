document.getElementById("result").innerHTML = 0

let numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach(function(item) {
    document.getElementById("result").innerHTML += " " + item
});