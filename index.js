let MainHash={};



function switchToStateFromURLHash() {
    let URLHash=window.location.hash;

    let stateStr=URLHash.substr(1);

    if ( stateStr!=="" ) {
        let parts=stateStr.split("_")
        MainHash={ pagename: parts[0] }; // первая часть закладки - номер страницы
           }
    else
        MainHash={pagename:'Main'}; // иначе показываем главную страницу


    let pageHTML="";
    switch ( MainHash.pagename ) {
        case 'Main':
            pageHTML+="<h3>Главная страница</h3>";
            pageHTML+=`<p>Города – самая простая словесная игра. Подходит для игры с детьми. Для игры в нее не требуются ничего, кроме ваших и вашего ребенка познаний в географии. Предназначена игра для двух и более игроков.</p>
                       <h3>Цель игры</h3>
                       <p>Назвать как можно больше реальных городов.</p>
`;
            break;
        case 'Rules':
             pageHTML+="<h3>Правила игры “Города”:</h3>";
             pageHTML+= `<p>Начинается игра с любого названия города.</p>
             <p>Каждый из участников игры по “кругу” называет реальный город. Каждый следующий город должен начинаться с буквы на которую заканчивается город предыдущего игрока (Например: МосквА-АнапА-АгриджентО-ОмсК-КраснодаР-Ростов-на-ДонУ-УльМ-МалЕ-ЕкатеринбурГ-ГаагА-АдеН-НовгороД).</p>
             <p>Запрещается повторение городов.</p>
             <p>Города заканчивающиеся на “ъ” и “ь” 'й' запрещены.</p>
             <p>Города на букву “Ы” не исключаются. Вот города на букву “Ы” (Ыб – Ызаколь – Ыгдыр – Ыйван-си – Ыйджу – Ыйджонбу – Ыйнджонбу – Ыйрен – Ыйсон – Ыллымах – Ымсон – Ыллюль – Ынторсура – Ындин – Ынталы).</p>
             <p>Игра завершается когда игрок совершил одну ошибку</p>`

            break;
        case 'Game':
            pageHTML+="<h3>Выбирете игровой режим</h3>";
            pageHTML+=`<a href="hot_seat/index.html"><p>Hot Seat - игра друг против друга</p></a>`;
            pageHTML+=`<a href="ai/index.html"><p>Игра против компьютера (рейтинговая игра)</p></a>`;
            break;
    }
    document.getElementById('app').innerHTML=pageHTML;

}

function switchToState(newState) {
    location.hash=newState.pagename;

}

function switchToMainPage() {
    switchToState( { pagename:'Main' } );
    document.location.reload();
}

function switchToRulesPage() {
    switchToState( { pagename:'Rules' } );
    document.location.reload();
}

function switchToGamePage() {
    switchToState( { pagename:'Game' } );
    document.location.reload();

}

switchToStateFromURLHash();