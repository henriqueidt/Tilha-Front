var date = new Date()

var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']


deuses.forEach(function (item) {
    document.getElementById("nomes").innerHTML += ` ${item} `
})