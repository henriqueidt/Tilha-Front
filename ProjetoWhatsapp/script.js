const object = {
    name: "Thiago",
    photo: '_images/obama.jpg',
    lastMessage: 'Lorem ipsum ante habitant',
    time: '20:33'
}

const object2 = {
    name: "Henrique",
    photo: 'https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/w(01-64)_gr.jpg',
    lastMessage: 'Hello my friend!!',
    time: '23:33'
}

const object3 = {
    name: "Bill Clinton",
    photo: 'https://pbs.twimg.com/profile_images/451207149478096896/HoMUOmyu_400x400.jpeg',
    lastMessage: 'Heyoo!! whanna tc?',
    time: '13:20'
}

const users = [object, object2, object3]

const htmlFinal = users.map(function(user) {
    console.log(user)
    return ` 
    <a href=""><li>
        <img class="contact-photo" src=${user.photo}>
        <section class="information">
            <div class="list-name-message">
                <div class="name-time"><p>${user.name}</p><div class="time">${user.time}</div></div>
                <p class="list-message"><i class="fas fa-check-double"></i>${user.lastMessage}</p>
            </div>
        </section>
        </li></a> 
`
})

// console.log(htmlFinal.join().split(",").join(""))

document.querySelector('.contacts').innerHTML = htmlFinal.join("")