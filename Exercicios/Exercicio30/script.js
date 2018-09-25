document.getElementById("result").innerHTML = 0

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

numbers.forEach(function(item) {
    if (item % 2 == 0){
        document.getElementById("result").innerHTML += " " + item
    }
});