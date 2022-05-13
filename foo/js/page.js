let emailRegShow = document.querySelector('.nav-reg-item');
let gapnew = localStorage.getItem('reus');

//Функция для поиска объекта по емеилу в массиве
function findEmail(item, index) {
    if (item.email === emailrow) {
        return true;
    } else return false;
}

function changeWord() {
    document.querySelector('.btn-log').innerHTML = 'Log out';
}

//берем массив с localStorage

let t = JSON.parse(localStorage.getItem('userData'));



//Меняем значение в шапке 
emailRegShow.innerHTML = t[gapnew].email;

console.log(emailRegShow.innerHTML);
if (emailRegShow) {
    changeWord();
    emailRegShow.classList.remove('hidden-email');

} else {
    emailRegShow.classList.add('hidden-email');

}

document.querySelector('.btn-log').addEventListener('click', function() {
    let b = undefined;
    localStorage.setItem('reus', b);
})




// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [43.2, 76.9],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14,

    }, {});


    var myPlacemark = new ymaps.Placemark([43.202715192073576, 76.89247322658834], {
        balloonContentHeader: 'Almaty',
        balloonContentBody: 'Grand Park',
    });



    myMap.geoObjects.add(myPlacemark);






}