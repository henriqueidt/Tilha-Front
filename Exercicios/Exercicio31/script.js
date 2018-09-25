let numbers = [0,1,2,3,4,5,6,7,8,9,10]

numbers.forEach(function(item1, index1) {
    numbers.forEach(function(item2, index2){
        document.getElementById("result").innerHTML += " " + item1 +
         "x" + item2 + "=" + item1 * item2 + "<br/>"  
    })
});