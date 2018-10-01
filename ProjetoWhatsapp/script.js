const object = {
    name: "Thiago",
    photo: '_images/obama.jpg',
    lastMessage: 'Lorem ipsum ante habitant',
    time: '20:33',
    phone: '+55 51 99723-5837'
}

const object2 = {
    name: "Trump",
    photo: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg',
    lastMessage: 'Hello my friend!!',
    time: '23:33',
    phone: '+55 51 99383-1234'
}

const object3 = {
    name: "Bill Clinton",
    photo: 'https://pbs.twimg.com/profile_images/451207149478096896/HoMUOmyu_400x400.jpeg',
    lastMessage: 'Heyoo!! whanna tc?',
    time: '13:20',
    phone: '+55 51 99283-2953'
}

const object4 = {
    name: "Dilma",
    photo: 'https://pbs.twimg.com/profile_images/1030086754441879552/rwdaiqVE_400x400.jpg',
    lastMessage: 'Oi. Quer estocar vento?',
    time: '13:20',
    phone: '+55 51 99324-2344'
}

const object5 = {
    name: "Temer",
    photo: 'https://pbs.twimg.com/profile_images/1015255524269535232/sSICnYpw_400x400.jpg',
    lastMessage: 'Oi é o dracula',
    time: '13:20',
    phone: '+55 51 99213-1245'
}

const users = [object, object2, object3, object4, object5, object, object2, object3, object4, object5, object, object2, object3, object4, object5]

const telephones = [object, object2, object3, object4, object5]

const numbers = telephones.map(function(telephone) {
    return `
    <li>
        <img class="contact-photo" src=${telephone.photo}>
        <section class="information">
            <div class="list-name-message">
                <div class="name-time"><p>${telephone.name}</p><div class="time"></div></div>
                <p class="list-message">${telephone.phone}</p>
            </div>
        </section>
    </li> 
    `
})

//document.querySelector('.contacts').innerHTML = htmlFInal2.join("")

const conversations = users.map(function(user) {
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

document.querySelector('.contacts').innerHTML = conversations.join("")

document.querySelector('.tab1-button').addEventListener('click', function(event) {
    document.querySelector('.contacts').innerHTML = numbers.join("")
    document.querySelector('.tab1-button').classList.add("tab-selected")
    document.querySelector('.tab2-button').classList.remove("tab-selected")
})

document.querySelector('.tab2-button').addEventListener('click', function(event) {
    document.querySelector('.contacts').innerHTML = conversations.join("")
    document.querySelector('.tab2-button').classList.add("tab-selected")
    document.querySelector('.tab1-button').classList.remove("tab-selected")
})

document.querySelector('.search-contact').addEventListener('keyup', function(e) {
    var name, text, i, input;
    ul = document.querySelector('.contacts');
    li = ul.getElementsByTagName('li');
    input = document.querySelector('.search-contact').value.toLowerCase();
    for (i = 0; i < li.length; i++) {
        name = li[i].querySelector('.name-time').querySelector('p').innerHTML.toLowerCase();
        text = li[i].querySelector('.list-message').innerHTML.toLowerCase();
        if(name.indexOf(input) > -1 || text.indexOf(input) > -1){
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});