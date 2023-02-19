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




btn.addEventListener('click', (ev) => {

    if (field.value === ''|| field.value.match(langRegex) ) {
        ev.preventDefault();

    } else if (turn) {

        pW.render(pW.move(), messageOne,'bubble')



        pW.message(`Ходит компьютер`)



        pointsOne.innerText = `Score ${pW.points}`;


    } else {
        const intervalID = setInterval( () => {

            aiTurn() ;

        }, 2000 );

        pW.message(`${pW.name}`)

    }
    turn = !turn;

})










function aiTurn (){

    if (cities.length === 0) {
        let aiCity = randomCity()
        cities.push(aiCity)
        renderAl(aiCity,messageTwo,'bubble_second');
    }
    if (cities.length !== 0 ) {
        let aiCity = randomCity()
        let lastChar = cities.at(-1).length-1;
        if (cities.includes(aiCity) ||  cities.at(-1)[lastChar] !== aiCity[0])  {
            lib.find ( elem => {
                elem = aiCity.toLowerCase()
                if (elem[0] === cities.at(-1)[lastChar] && cities.includes(elem)===false){
                    cities.push(elem)
                    renderAl(aiCity,messageTwo,'bubble_second');
                }
           })

        }
    }

}

function randomCity () {

    let rand = Math.floor(Math.random(lib)*lib.length)

    return lib[rand]
}


function renderAl (city, block, className){

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