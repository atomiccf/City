/* window.addEventListener('keydown', (e)=>{

        if (e.keyCode === 13 && cities.length === 0){
            tempCity =  field.value.toLowerCase();
            field.value = '';
            if (lib.includes(`${ucFirst(tempCity)}`)){
                cities.push(`${ucFirst(tempCity)}` )
                renderOne (cities);

            }
        }else  if (e.keyCode === 13 && cities.length>0) {
            tempCity =  field.value.toLowerCase();
            field.value = '';
            let lastChar = cities.at(-1).length-1;
            let count = 0;
            if (cities.includes(tempCity) || cities.at(-1)[lastChar] !== tempCity[0] || !lib.includes(`${ucFirst(tempCity)}`)) {
                console.log('неправильный вариант')
                count++
                if (count>3) game = false
            } else {
                cities.push(`${ucFirst(tempCity)}`);
                renderOne (cities);
                pTwoTurn = true;

            }

        }

    })*/

/*window.addEventListener('keydown', (e)=>{

    if (e.keyCode === 13 && cities.length === 0){
        tempCity =  field.value.toLowerCase();
        field.value = '';
        cities.push(`${ucFirst(tempCity)}` )
        render (cities);
    }else  if (e.keyCode === 13 && cities.length>0) {
        tempCity =  field.value.toLowerCase();
        field.value = '';
        let lastChar = cities.at(-1).length-1;
        let count = 0;
        if (cities.includes(tempCity) || cities.at(-1)[lastChar] !== tempCity[0] || !lib.includes(tempCity)) {
            alert('начните сначала')
            count++
            console.log(count)/!*добавить вылет модального окна*!/
        } else {
            cities.push(`${ucFirst(tempCity)}`);
            render (cities);

        }

    }
})*/

/*window.addEventListener('keydown', (e)=>{

       if (e.keyCode === 13 && cities.length === 0){
           tempCity =  field.value.toLowerCase();
           field.value = '';
           if (lib.includes(`${ucFirst(tempCity)}`)){
               cities.push(`${ucFirst(tempCity)}` )
               renderTwo(cities);

           }
       }else  if (e.keyCode === 13 && cities.length>0) {
           tempCity =  field.value.toLowerCase();
           field.value = '';
           let lastChar = cities.at(-1).length-1;
           let count = 0;
           if (cities.includes(tempCity) || cities.at(-1)[lastChar] !== tempCity[0] || !lib.includes(`${ucFirst(tempCity)}`)) {
               console.log('неправильный вариант')
               count++
               if (count>3) game = false
           } else {
               cities.push(`${ucFirst(tempCity)}`);
               renderTwo (cities);
               pOneTurn = true;

           }

       }

   })*/