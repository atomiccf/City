
let allCities =['Балларат', 'Бендиго', 'Варрнамбул', 'Во донга', 'Гелон', 'Милтон', 'Мельбурн', 'Милдура', 'Траралгон', 'Шеппартон', 'Бунбури', 'Гералдтон', 'Калгурли', 'Мандурах', 'Олбани', 'Перт', 'Брисбен', 'Бундаберг', 'Гладстон', 'Каирнс', 'Калундра', 'Маккей', 'Мариборо', 'Маунт-Иса', 'Рокхамптон', 'Таунсвилл', 'Тувумба', 'Албури', 'Армидейл', 'Батурст', 'Брокен-Хилл', 'Вагга-Вагга', 'Воллонгонг', 'Гоулбурн', 'Дуббо-Дуббо', 'Коффс-Харбор', 'Куэнбиан', 'Лисмор', 'Ньюкастл', 'Оранж', 'Сидней', 'Тамворт', 'Алис Спрингс', 'Дарвин', 'Девонпорт', 'Лаункестон', 'Хобарт', 'Канберра', 'Аделаида', 'Маунт-Гамбир', 'Вена', 'Велс', 'Линц', 'Стир', 'Зальцбург', 'Виллач', 'Клагенфурт', 'Венер-Нойштадт', 'Грац', 'Иннсбрук', 'Леобен', 'Агдам', 'Агдаш', 'Агджабеди', 'Аджикенд', 'Акстафа', 'Али-Байрамлы', 'Алунитаг', 'Артем-Остров', 'Астара', 'Ахсу', 'Баку', 'Балаханы', 'Банк', 'Барда', 'Белоканы', 'Бинагади', 'Бирмай', 'Бузовна', 'Варташен', 'Гадрут', 'Геокчай', 'Гобустан', 'Горадиз', 'Гэтргян', 'Дальмамедли', 'Дашкесан', 'Джалилабад', 'Джебраил', 'Дивичи', 'Евлах', 'Ждановск', 'Закаталы', 'Зангелан', 'Зардоб', 'Имишли', 'Исмаиллы', 'Истису', 'Казанбулак', 'Казах',]

let tempCity = '';

let cities = [];


window.addEventListener('keydown', (e)=>{

    if (e.keyCode === 13 ){

        aiTurn ();


    }


})




/*player turn*/
function playerTurn (){
    let playerTurn = false
    if (cities.length === 0) {
        tempCity =  field.value.toLowerCase();
        field.value = '';
        cities.push(`${ucFirst(tempCity)}` )
        render (cities);

    }

    if (cities.length !==0 ) {
        tempCity =  field.value.toLowerCase();
        field.value = '';
        let lastChar = cities.at(-1).length-1;
        if (cities.includes(tempCity) || cities.includes(tempCity) || cities.at(-1)[lastChar] !== tempCity[0] || !allCities.includes(tempCity)) {
            console.log('начните сначала') /*добавить вылет модального окна*/
        } else {
            cities.push(`${ucFirst(tempCity)}`);
            render (cities);
            aiTurn ()
        }
    }



}

function aiTurn (){

    if (cities.length === 0) {
        let aiCity = randomCity()
        cities.push(`${ucFirst(aiCity)}` )
        render (cities);
    }
    if (cities.length !== 0 ) {
        let aiCity = randomCity()
        let lastChar = cities.at(-1).length-1;
        if (cities.includes(aiCity) ||  cities.at(-1)[lastChar] !== aiCity[0])  {
            allCities.find ( elem => {
                elem = aiCity.toLowerCase()
                if (elem[0] === cities.at(-1)[lastChar] && cities.includes(elem)===false){
                    cities.push(`${ucFirst(elem)}`) // привести к нижнему регистру
                    render (cities);
                }
           })

        }
    }

}

function randomCity () {

    let rand = Math.floor(Math.random(allCities)*allCities.length)

    return allCities[rand]
}


function renderAl (cities){
    let str = '';
    let strTwo = '';
    cities.forEach( (elem, index) => {

        if (elem !== undefined &&  index%2 === 0){
            str += elem + "<br>";
            return   messageOne.innerHTML ='1:' + str;

        } else  if (elem !== undefined &&  index%2 !== 0){
            strTwo += elem + "<br>";
            return   messageTwo.innerHTML = '2:' + strTwo;

        }


    })

}
function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}