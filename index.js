const readline = require('readline-sync')

const strstart = "> "

var difficulty_selection = `${strstart}You have three difficulties, choose one of the listed ones (fruit,animals,country)\n${strstart}`



var word = {
    fruit: ["fruit",
        "apricot",
        "pineapple",
        "banana",
        "bergamot",
        "grape",
        "grapefruit",
        "pear",
        "melon",
        "lemon",
        "mandarin",
        "peach",
        "plum",
        "apple",
        "lime",
        "kiwi",
        "fig",
        "mango",
        "persimmon",
        "pomelo"],
    animals: [
        "bear",
        "fox",
        "rabbit",
        "wolf",
        "pig",
        "deer",
        "moose",
        "donkey",
        "buffalo",
        "camel",
        "giraffe",
        "hippopotamus",
        "zebra",
        "elephant",
        "horse",
        "leopard",
        "lion",
        "tiger",
        "bison",
        "koala",
        "hyena",
        "panda",
        "rhinoceros",
        "monkey",
        "gorilla",
        "chimpanzee",
        "gibbon",
        "baboon",
        "mouse",
        "possum",
        "skunk",
        "beaver",
        "squirrel",
        "rat"],
    country: ["italy","japan","china","russia","india","serbia","argentina","australia","belarus","chile",
    "colombia",
    "france",
    "germany",
    "ireland",
    "kazakhstan",
    "turkey",
    "uzbekistan",
    "slovakia",
    "slovenia",
    "peru",
    "pakistan",
    "mongolia",
    "finland",
    "ecuador",
    "brazil",
    "armenia",]
}
console.log(`${strstart}You got to the game - the gallows`)
//var difficantly = readline.question(difficulty_selection)

while(difficantly != "fruit" && difficantly != "animals" && difficantly != "country"){
    var difficantly = readline.question(difficulty_selection)
    switch (difficantly) {
        case "fruit":
            gallow(10,word.fruit)
            break;
        case "animals":
            gallow(7,word.animals)
            break;
        case "country":
            gallow(5,word.country)
            break;
        default:
            console.log('Incorrectly entered')
            break;
    }
}


function gallow(life,obj_word) {
            var random = Math.floor(Math.random()*(obj_word.length))
            var randomword = obj_word[random]
            var nullarray = new Array(randomword.length)
            for (let i = 0; i < randomword.length; i++) {
                nullarray[i] = "|_|"
            }
            console.log(nullarray.join('')+`\nLife : ${life}`)
            while (nullarray.join('') != randomword && life > 0 ) {
                var letter = readline.question(`enter the letter ${strstart}`)
                for (const index in randomword) {
                    if (randomword[index] == letter) {
                        var bool = randomword[index] == letter
                        nullarray[index] = letter
                    }
                }
                bool = bool == true ? bool = false : life--    
                console.log(nullarray.join('')+`\nLife : ${life}`)
            }
            if(life == 0){
                console.log("You've lost!!!:(")
                console.log(`there was a word : "${randomword}"`)
            } else {
                console.log("You Win!!!!")
            }
}