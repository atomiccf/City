let field = document.getElementById('field');
let messageOne = document.getElementById('firstPlayer_gameField');
let messageTwo = document.getElementById('secondPlayer_gameField');
let nameOne = document.getElementById('firstPlayer_name');
let nameTwo = document.getElementById('secondPlayer_name');
let pointsOne = document.getElementById('firstPlayer_info');
let pointsTwo = document.getElementById('secondPlayer_info');
let btn = document.getElementById('move');
let tempCity = '';
const langRegex = /^[A-Za-z]+$/
const clickAudio = new Audio("../src/pencil_write.mp3");

let cities = [];
let storage =[];
let turn = true;
let gameOver = true;

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
            storage.push(`${pW} ${pS}`)
            localStorage.playerInfo = JSON.stringify(storage)
            gameOver = false
            return
        }
                pW.message(`Ходит ${pS.name}`)
    } else {

        pS.render(pS.move(), messageTwo,'bubble_second')
        clickSound()

        pointsTwo.innerText = `Score ${pS.points}`;
        if (pS.mistakes === 1) {
            storage.push(`${pW} ${pS}`)
            localStorage.playerInfo = JSON.stringify(storage)
           gameOver = false
            return
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


function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}


function clickSound() {
    clickAudio.currentTime = 0; // в секундах
    clickAudio.play();
}




