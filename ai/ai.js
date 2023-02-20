let field = document.getElementById('field');
let messageOne = document.getElementById('firstPlayer_gameField');
let messageTwo = document.getElementById('secondPlayer_gameField');
let nameOne = document.getElementById('firstPlayer_name');
let nameTwo = document.getElementById('secondPlayer_name');
let pointsOne = document.getElementById('firstPlayer_info');

let btn = document.getElementById('move');
let tempCity = '';
const langRegex = /^[A-Za-z]+$/
const clickAudio = new Audio("../src/pencil_write.mp3");
let cities = [];

let turn = true;
let gameOver = true;

let pW = new Player();
let pS = new Player();

const rand = (a, b) => Math.floor((Math.random() * (b - a + 1) + a));

btn.addEventListener('click', (ev) => {

    if (field.value === '' || field.value.match(langRegex)) {
        ev.preventDefault();

    } else if (turn) {

        pW.render(pW.move(), messageOne, 'bubble')

        pW.message(`Ходит компьютер`)

        pointsOne.innerText = `Score ${pW.points}`;

        setTimeout(aiTurn, rand(1000,10000));

        pW.message(pW.name);

    }
    //   turn = !turn;

})


function aiTurn() {
    /*if (cities.length === 0) {
        console.log(0);
        let aiCity = randomCity()
        cities.push(aiCity)
        renderAl(aiCity, messageTwo, 'bubble_second');
    }*/

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