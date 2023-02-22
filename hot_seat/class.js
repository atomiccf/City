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
        }, 2000)

       setTimeout(() => {
            message.classList.remove('player_mesage')
            message.classList.remove('player_mesage_show')
        }, 4000)



    }
    render(city, block, className) {
        const answer = document.createElement('span')
        if (city !== undefined) {
            answer.classList.add(className)
            block.appendChild(answer)
            answer.innerText = city

        }
        else {

            return
        }


    }
    move() {

        if (cities.length === 0) {
            tempCity = field.value.toLowerCase();
            field.value = '';
            if (lib.includes(`${ucFirst(tempCity)}`)) {
                cities.push(`${ucFirst(tempCity)}`)
                ++this.points
                return `${ucFirst(tempCity)}`

            }
        } else if (cities.length > 0) {
            tempCity = field.value.toLowerCase();
            field.value = '';
            let lastChar = cities.at(-1).length - 1;

            if (cities.includes(`${ucFirst(tempCity)}`)) {
                ++this.mistakes;
                return `${ucFirst('такой город уже был')}`
            }
            else if (cities.at(-1)[lastChar] !== tempCity[0]) {
                ++this.mistakes;

                return `${ucFirst('город начинается не на ту букву')}`
            }
            else if (!lib.includes(`${ucFirst(tempCity)}`)) {
                ++this.mistakes;
                return `${ucFirst('такой город не существует')}`
            }
            else {
                cities.push(`${ucFirst(tempCity)}`);
                ++this.points;
                return `${ucFirst(tempCity)}`

            }
        }
    }


}