class Player {
    constructor(name) {

        this.name = name ;
        this.points = 0;
        this.mistakes = 0;

    }

    message(text) {
        let message = document.getElementById('message');
        message.innerHTML = text;

        message.classList.add('player_mesage');
        setTimeout(() => {
            message.classList.remove('player_mesage');
            message.classList.add('player_mesage_show')
        }, "2000")

        setTimeout(() => {
            message.classList.remove('player_mesage')
            message.classList.remove('player_mesage_show')
        }, "7000")



    }
    render(city, block) {
        const answer = document.createElement('span')

        block.appendChild(answer)
        answer.innerText = city

    }
    move() {

        if (cities.length === 0) {
            tempCity = field.value.toLowerCase();
            field.value = '';
            if (lib.includes(`${ucFirst(tempCity)}`)) {
                cities.push(`${ucFirst(tempCity)}`)
                return `${ucFirst(tempCity)}`


            }
        } else if (cities.length > 0) {
            tempCity = field.value.toLowerCase();
            field.value = '';
            let lastChar = cities.at(-1).length - 1;

            if (cities.includes(`${ucFirst(tempCity)}`)) {
                ++this.mistakes;
                console.log('такой город уже был');

            }
            else if (cities.at(-1)[lastChar] !== tempCity[0]) {
                ++this.mistakes;
                console.log('город начинается не на ту букву');

            }
            else if (!lib.includes(`${ucFirst(tempCity)}`)) {
                ++this.mistakes;
                console.log('города нет в списке')


            }
            else {
                cities.push(`${ucFirst(tempCity)}`);
                return `${ucFirst(tempCity)}`

            }

        }




    }


}




let field = document.getElementById('field');
let messageOne = document.getElementById('firstPlayer_gameField');
let messageTwo = document.getElementById('secondPlayer_gameField');
let nameOne = document.getElementById('firstPlayer_name');
let nameTwo = document.getElementById('secondPlayer_name');
let pointsOne = document.getElementById('firstPlayer_info');
let pointsTwo = document.getElementById('secondPlayer_info');

let btn = document.getElementById('move');
let cities = [];
let tempCity = '';



const clickAudio = new Audio("../src/pencil_write.mp3")

let turn = true;
let gameOver = true






let pW = new Player();

let pS = new Player();


reg()



btn.addEventListener('click', (ev) => {

    if (field.value === '') {
        ev.preventDefault()


    } else if (turn) {

        pW.render(pW.move(), messageOne)
        clickSound()
        ++pW.points
        pointsOne.innerText = `Score ${pW.points}`;
        if (pW.mistakes === 1) {

            gameOver = false
            return
        }
        pW.message(`Ходит ${pS.name}`)
    } else {

        pS.render(pS.move(), messageTwo)
        clickSound()
        ++pS.points
        pointsTwo.innerText = `Score ${pS.points}`;
        if (pS.mistakes === 1) {

            gameOver = false
            return
        }
        pS.message(`Ходит ${pW.name}`)
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
            console.log(1);
            regPlayer.classList.remove('registration_show');
            regPlayer.classList.add('registration_hide');
            regPlayer.classList.remove('registration_hide');
            regPlayer.classList.add('reg')



           pW.name = reg_valueOne.value;
           pS.name = reg_valueTwo.value;
            console.log(pW.name)
            console.log(pS.name)
             nameOne.innerText = `Player ${pW.name}`
            pointsOne.innerText = `Score ${pW.points}`
            nameTwo.innerText = `Player ${pS.name}`
            pointsTwo.innerText = `Score ${pS.points}`


        }

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