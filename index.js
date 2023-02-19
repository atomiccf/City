var MainHash={};
function UpdateContent(URL) {
    MainHash = URL;
    let Content = document.getElementById('article');
    switch (MainHash.pagename) {
        case 'Main':
            Content.innerHTML = "<h6>Главная страница</h6>";
            Content.innerHTML ="<p>Ослабление памяти у людей в последнее время приобретает все больший масштаб. В течение последних нескольких десятков лет, когда появились электронные инструменты, позволяющие записывать все то, что раньше хранилось в памяти, люди стали чаще жаловаться на ухудшение памяти. А происходит это потому, что память у человека перестает получать ежедневные тренировки и постепенно ее функции снижаются. Чтобы остановить этот процесс необходимо тренировать свою память каждый день. И это относится к людям любого возраста.</p>";

            break;
        case 'Rules':
            Content.innerHTML = "<h6>Правила</h6>";
            Content.innerHTML = "<p>Вам дается 30 секунд чтобы запомнить, как расставлены фигуры, после чего начинается фаза игры. Теперь у вас есть 30 секунд чтобы восстановить по памяти поле. Перетаскивайте фигуры в правильные ячейки. Когда вы опускаете фигуру в ячейку она подсвечивается черным. Достать фигуру обратно нельзя. Положить поверх - тоже. Если вы случайно положили не в ту ячейку нажмите кнопку переразложить. За каждый пройденый раунд начисляются очки.</p>";

            break;
        case 'Start':
            Content.innerHTML = "<h6>Начало игры</h6>";

            break;
        case 'Score':

            break;

    }

}


function switchToStateFromURLHash() {
    var URLHash=window.location.hash;

    var stateStr=URLHash.substr(1);

    if ( stateStr!=="" ) {
        var parts=stateStr.split("_")
        MainHash={ pagename: parts[0] }; // первая часть закладки - номер страницы
           }
    else
        MainHash={pagename:'Main'}; // иначе показываем главную страницу


    var pageHTML="";
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
            pageHTML+=`<a href="hot_seat/index.html"><p>Hot Seat - игра друг против друга</p></a>`
            break;
    }
    document.getElementById('app').innerHTML=pageHTML;

}

function switchToState(newState) {
    var stateStr=newState.pagename;
      location.hash=stateStr;


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