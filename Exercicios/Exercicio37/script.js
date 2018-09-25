var date = new Date()

var deuses = ['Aegir', 'Aud', 'Balder']

alert(deuses.length)

deuses.forEach(function (item) {
  alert(item)
})

function threeLetters(word) {
    return word.length <= 3
}

function fiveLetters(word) {
    return word.length <= 5 && word.length > 3
}

function sixLetters(word) {
    return word.length > 5
}

alert(deuses.filter(threeLetters))
alert(deuses.filter(fiveLetters))
alert(deuses.filter(sixLetters))

deuses.push('Loki', 'Odin', 'Frey')

var numbers = [5, 7, 1, 8, 9]

alert(numbers.sort(function(a, b){return b-a}))