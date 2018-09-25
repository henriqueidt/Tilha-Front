setInterval(function() {
    var h1 = document.querySelector('.contador').innerText
    
    if(h1 >= 1){
    document.querySelector('.contador').innerText = h1 - 1
    } else {
        h1 = 6
        document.querySelector('.contador').innerText = h1 - 1
    }
}, 1000)