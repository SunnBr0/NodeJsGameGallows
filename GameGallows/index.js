const { stdin, stdout } = process;
let fs = require("fs")
let name_txt_word = fs.readdirSync("./words_tema")

const strstart = "> "
let res = ""
let arr = []
let type = []
let flag = true

for (let i = 0; i < name_txt_word.length; i++) {
    type.push(name_txt_word[i].split(".txt")[0])
}
var difficulty_selection = `${strstart}Вы можете выбрать разные  жанры (${[...type]}):\n${strstart}`
console.log(`${strstart}Вы играете в игру под названием - Виселлица`)


async function game() {
    
    while (flag) {
        var difficantly = await prompt(difficulty_selection)
        for (let i = 0; i < type.length; i++) {
            if (difficantly === type[i]) {
                res = fs.readFileSync(`./words_tema/${name_txt_word[i].split()}`)
                arr.push(String(res).split(/\r\n/))
                gallow(10, arr[0])
                flag = false
            }
        }
        if (type.indexOf(difficantly) === -1) {
            console.log("Некоректный ввод")
        }
    }
}

async function gallow(life, obj_word) {
    var random = Math.floor(Math.random() * (obj_word.length))
    var randomword = obj_word[random]
    var nullarray = new Array(randomword.length)
    for (let i = 0; i < randomword.length; i++) {
        nullarray[i] = "|_|"
    }
    console.log(nullarray.join('') + `\nLife : ${life}`)
    while (nullarray.join('') != randomword && life > 0) {
        var letter = await prompt(`Введите букву ${strstart}`)
        for (const index in randomword) {
            if (randomword[index] == letter) {
                var bool = randomword[index] == letter
                nullarray[index] = letter
            }
        }
        bool = bool == true ? bool = false : life--
        console.log(nullarray.join('') + `\nЖизнь : ${life}`)
    }
    if (life == 0) {
        console.log("Вы проиграли!!!:(")
        console.log(`правильное слово : "${randomword}"`)
        process.exit();

    } else {
        console.log("Вы победили,ура!!!!")
        process.exit();

    }
}

function prompt(question) {
    return new Promise((resolve, reject) => {
        stdin.resume();
        stdout.write(question);

        stdin.on('data', data => resolve(data.toString().trim()));
    });
}


game();
