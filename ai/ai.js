let field = document.getElementById('field');
let messageOne = document.getElementById('firstPlayer_gameField');
let messageTwo = document.getElementById('secondPlayer_gameField');
let nameOne = document.getElementById('firstPlayer_name');

let pointsOne = document.getElementById('firstPlayer_info');

let btn = document.getElementById('move');
let tempCity = '';
const langRegex = /^[A-Za-z]+$/
const clickAudio = new Audio("../src/pencil_write.mp3");
let cities = [];

let pW = new Player();


reg ()

btn.addEventListener('click', (ev) => {

    if (field.value === '' || field.value.match(langRegex)) {
        ev.preventDefault();

    } else  {

        pW.render(pW.move(), messageOne, 'bubble')
        clickSound()

        pointsOne.innerText = `Score ${pW.points}`;

        setTimeout(aiTurn,  rand(1000,10000));

        pW.message('Ход компьютера');

    }
    //   turn = !turn;

})



function aiTurn() {


    let aiCity = randomCity()
    const lastCity = cities[cities.length - 1];
    let lastChar = lastCity[lastCity.length - 1];
    console.log(lastChar);
    if (!cities.includes(aiCity) || lastChar !== aiCity[0]) {
        lib.find(elem => {
            console.log(elem)
            if (elem[0].toLowerCase() === lastChar && !cities.includes(elem)) {
                cities.push(elem)
                renderAl(elem, messageTwo, 'bubble_second');
                return elem;
            }
        })
    }

}

function randomCity() {

    let rand = Math.floor(Math.random(lib) * lib.length)

    return lib[rand]
}


function renderAl(city, block, className) {

    const answer = document.createElement('span')

    answer.classList.add(className)
    block.appendChild(answer)
    answer.innerText = city

}

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function clickSound() {
    clickAudio.currentTime = 0; // в секундах
    clickAudio.play();
}

function reg (){
    const regPlayer = document.getElementById('reg');
    regPlayer.classList.remove('reg')
    regPlayer.classList.add('registration_show');
    const reg_valueOne = document.getElementById('reg_valueOne')
    const reg_button = document.getElementById('reg_button');

    reg_button.addEventListener('click', (ev) => {
        if (reg_valueOne.value === '' ) {
            ev.preventDefault();

        } else {
            regPlayer.classList.remove('registration_show');
            regPlayer.classList.add('registration_hide');
            regPlayer.classList.remove('registration_hide');
            regPlayer.classList.add('reg')
            pW.name = reg_valueOne.value;
            nameOne.innerText = `Player: ${pW.name}`
            pointsOne.innerText = `Score ${pW.points}`

        }
        if (pW.mistakes === 1) {

            btn.removeEventListener("click", (ev) =>{})
            return
        }
        pW.message(`Ходит ${pW.name}`)
    });

}

const rand = (a, b) => Math.floor((Math.random() * (b - a + 1) + a));