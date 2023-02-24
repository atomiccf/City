let field = document.getElementById('field');
let messageOne = document.getElementById('firstPlayer_gameField');
let messageTwo = document.getElementById('secondPlayer_gameField');
let nameOne = document.getElementById('firstPlayer_name');
const regPlayer = document.getElementById('reg');
let pointsOne = document.getElementById('firstPlayer_info');
const send = document.getElementById('send');
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

        let timerId = setTimeout(aiTurn,  rand(1000,10000));

        if (pW.mistakes === 1) {
            clearTimeout(timerId);
            gameOver()
            btn.removeEventListener("click", () =>{})

        }

    }


})



function aiTurn() {


    let aiCity = randomCity()
    const lastCity = cities[cities.length - 1];
    let lastChar = lastCity[lastCity.length - 1];
    if (!cities.includes(aiCity) || lastChar !== aiCity[0]) {
        lib.find(elem => {

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
            nameOne.innerText = `Player ${pW.name}`
            pointsOne.innerText = `Score ${pW.points}`

        }

        pW.message(`Ходит ${pW.name}`)
    });

}
function gameOver() {
    const gameOver = document.getElementById('gameOver');
    const nameOne = document.getElementById('scoreNameOne');

    const pointsOne = document.getElementById('scoreOne');

    let message = document.getElementById('message');
    message.classList.remove('player_mesage')
    message.classList.remove('player_mesage_show')
    gameOver.classList.remove('gameOver');
    gameOver.classList.add('gameOver_show');
    nameOne.innerText = `Player: ${pW.name}`;
    pointsOne.innerText = `Points ${pW.points}`


}
//AJAX

const rand = (a, b) => Math.floor((Math.random() * (b - a + 1) + a));
const URL='https://fe.it-academy.by/AjaxStringStorage2.php';
const NAME='CFC_120390';
const REQUEST_TYPE={
    READ:'READ',
    LOCKGET:'LOCKGET',
    UPDATE:'UPDATE',
    INSERT:'INSERT',
};

send.addEventListener('click', async () =>{
    const {innerText: firstName} = nameOne;
    const {innerText: points} = pointsOne;
    const user = {
        firstName,
        points,
    };

    const updatePassword=Math.random ();
    const requestUsers=await request ( REQUEST_TYPE.READ, NAME);

    if(!requestUsers) {
        const res = [{...user}];

        await request (REQUEST_TYPE.LOCKGET, NAME, updatePassword);
        await request (REQUEST_TYPE.UPDATE, NAME, updatePassword, JSON.stringify(res));
    }
    else {
        requestUsers.push(user);
        await request ( REQUEST_TYPE.LOCKGET, NAME,updatePassword);
        await request(REQUEST_TYPE.UPDATE,NAME,updatePassword, JSON.stringify(requestUsers));
    }
});











async function request (func,name,pass,val) {
    let sp=new URLSearchParams();
    sp.append('f', func);
    sp.append('n', name);
    pass && sp.append('p', pass);
    val && sp.append('v', val);

    try {
        const response= await fetch ( URL, { method:'POST', body: sp });
        const data = await response.json();

        if (data.result === 'OK') {
            alert('Success');

            return;
        }
        return JSON.parse(data.result);
    } catch (err) {
        alert (err);
    }
}
