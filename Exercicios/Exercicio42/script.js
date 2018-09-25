 var link = ['https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png',
  'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png',
  'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png']
 
var i = 0;
var j = 0;

 setInterval(function() {
     if(i < 3){
        j = j + 4
        document.querySelector('#bear-image').style.left = j + "px"
        document.querySelector('#bear-image').src = link[i]
        i++
     } else {
        j = j + 4
        document.querySelector('#bear-image').style.left = j + "px"
        document.querySelector('#bear-image').src = link[i-2]
        i = 0
     }
}, 300)
