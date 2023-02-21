let field = document.getElementById('field');
const messageOne = document.getElementById('firstPlayer_gameField');
const messageTwo = document.getElementById('secondPlayer_gameField');
const nameOne = document.getElementById('firstPlayer_name');
const nameTwo = document.getElementById('secondPlayer_name');
const pointsOne = document.getElementById('firstPlayer_info');
const pointsTwo = document.getElementById('secondPlayer_info');
const btn = document.getElementById('move');
let tempCity = '';
const langRegex = /^[A-Za-z]+$/
const clickAudio = new Audio("../src/pencil_write.mp3");
let cities = [];
let turn = true;


let pW = new Player();
let pS = new Player();
reg()

btn.addEventListener('click', (ev) => {

    if (field.value === ''|| field.value.match(langRegex) ) {
        ev.preventDefault();

    } else if (turn) {

        pW.render(pW.move(), messageOne,'bubble')
        clickSound();

        pointsOne.innerText = `Score ${pW.points}`;
        if (pW.mistakes === 1) {

            gameOver()
            btn.removeEventListener("click", (ev) =>{})
        }
        pW.message(`Ходит ${pS.name}`)
    } else {

        pS.render(pS.move(), messageTwo,'bubble_second')
        clickSound()

        pointsTwo.innerText = `Score ${pS.points}`;
        if (pS.mistakes === 1) {
            gameOver()
            btn.removeEventListener("click", (ev) =>{})
        }
        pS.message(`Ходит ${pS.name}`)
    }
    turn = !turn;

})


function reg (){
    const regPlayer = document.getElementById('reg');
    regPlayer.classList.remove('reg')
    regPlayer.classList.add('registration_show');
    const reg_valueOne = document.getElementById('reg_valueOne')
    const reg_valueTwo = document.getElementById('reg_valueTwo')
    const reg_button = document.getElementById('reg_button');

    reg_button.addEventListener('click', (ev) => {
        if (reg_valueOne.value === '' || reg_valueTwo.value === '') {
            ev.preventDefault();

        } else {
          regPlayer.classList.remove('registration_show');
          regPlayer.classList.add('registration_hide');
          regPlayer.classList.remove('registration_hide');
          regPlayer.classList.add('reg')

          pW.name = reg_valueOne.value;
          pS.name = reg_valueTwo.value;
          nameOne.innerText = `Player: ${pW.name}`
          pointsOne.innerText = `Score ${pW.points}`
          nameTwo.innerText = `Player: ${pS.name}`
          pointsTwo.innerText = `Score ${pS.points}`
        }
        pW.message(`Ходит ${pW.name}`)
    });

}

function gameOver() {
    const gameOver = document.getElementById('gameOver');
    const nameOne = document.getElementById('scoreNameOne');
    const nameTwo = document.getElementById('scoreNameTwo');
    const pointsOne = document.getElementById('scoreOne');
    const pointsTwo = document.getElementById('scoreTwo');

    gameOver.classList.remove('gameOver');
    gameOver.classList.add('gameOver_show');
    nameOne.innerText = `Player: ${pW.name}`;
    nameTwo.innerText = `Player: ${pS.name}`;
    pointsOne.innerText = `Points ${pW.points}`
    pointsTwo.innerText = `Points ${pS.points}`

}

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}


function clickSound() {
    clickAudio.currentTime = 0; // в секундах
    clickAudio.play();
}




