const object = {
    name: "Thiago",
    photo: '_images/obama.jpg',
    lastMessage: 'Lorem ipsum ante habitant',
    time: '20:33'
}

const object2 = {
    name: "Trump",
    photo: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg',
    lastMessage: 'Hello my friend!!',
    time: '23:33'
}

const object3 = {
    name: "Bill Clinton",
    photo: 'https://pbs.twimg.com/profile_images/451207149478096896/HoMUOmyu_400x400.jpeg',
    lastMessage: 'Heyoo!! whanna tc?',
    time: '13:20'
}

const object4 = {
    name: "Dilma",
    photo: 'https://pbs.twimg.com/profile_images/1030086754441879552/rwdaiqVE_400x400.jpg',
    lastMessage: 'Oi. Quer estocar vento?',
    time: '13:20'
}

const object5 = {
    name: "Temer",
    photo: 'https://pbs.twimg.com/profile_images/1015255524269535232/sSICnYpw_400x400.jpg',
    lastMessage: 'Oi é o dracula',
    time: '13:20'
}

const users = [object, object2, object3, object4, object5, object, object2, object3, object4, object5, object, object2, object3, object4, object5]

const htmlFinal = users.map(function(user) {
    console.log(user)
    return ` 
    <li>
        <img class="contact-photo" src=${user.photo}>
        <section class="information">
            <div class="list-name-message">
                <div class="name-time"><p>${user.name}</p><div class="time">${user.time}</div></div>
                <p class="list-message"><i class="fas fa-check-double"></i>${user.lastMessage}</p>
            </div>
        </section>
    </li> 
`
})

document.querySelector('.contacts').innerHTML = htmlFinal.join("")

const searchContact = document.forms['conversations-search-bar'].querySelector('.search-contact');

function myFunction(){
    var i, input, ul, li, input;
    input = document.querySelector('.search-contact');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.contacts');
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('p')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

document.querySelector('.search-contact').addEventListener('keyup', function(e) {
    var a, b;
    ul = document.querySelector('.contacts');
    li = ul.getElementsByTagName('li');
    input = document.querySelector('.search-contact').value.toLowerCase();
    for (i = 0; i < li.length; i++) {
        a = li[i].querySelector('.name-time').querySelector('p').innerHTML.toLowerCase();
        b = li[i].querySelector('.list-message').innerHTML.toLowerCase();
        if(a.indexOf(input) > -1 || b.indexOf(input) > -1){
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

});