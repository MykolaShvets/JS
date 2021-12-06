// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = (e) => {
//     let target = e.target;
//     console.log('Назва тегу: ' + target.tagName);
//     console.log('Список класів: ' + target.classList);
//     console.log('ID: ' + target.id);
//     console.log('Розміри в форматі висота*ширина: ' + target.offsetHeight + '*' + target.offsetWidth);
//
// }


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let popupBody = document.createElement('div');
// document.body.append(popupBody);
//
// popupBody.style.width = '500px';
// popupBody.style.height = '500px';
// popupBody.style.background = '#000';
// popupBody.style.opacity = '0.6';
// popupBody.style.position = 'absolute';
// popupBody.style.top = '50%';
// popupBody.style.marginTop = '-250px';
// popupBody.style.left = '50%';
// popupBody.style.marginLeft = '-250px';
// popupBody.style.display = 'flex';
// popupBody.style.flexDirection = 'column';
// popupBody.style.alignItems = 'center';
//
// let popupContent = document.createElement('div');
// let popupClose = document.createElement('button');
//
// popupBody.append(popupContent, popupClose);
//
// popupClose.innerText = 'Close';
// popupClose.style.border = 'none';
// popupClose.style.background = 'transparent';
// popupClose.style.color = '#fff';
//
// let tagName = document.createElement('p');
// let classList = document.createElement('p');
// let elementId = document.createElement('p');
// let size = document.createElement('p');
//
// popupContent.append(tagName, classList, elementId, size);
//
// tagName.style.color = '#fff';
// classList.style.color = '#fff';
// elementId.style.color = '#fff';
// size.style.color = '#fff';


// document.onclick = (e) => {
//     let popupBody = document.createElement('div');
//     document.body.append(popupBody);
//
//     popupBody.style.width = '500px';
//     popupBody.style.height = '500px';
//     popupBody.style.background = '#000';
//     popupBody.style.opacity = '0.6';
//     popupBody.style.position = 'absolute';
//     popupBody.style.top = '50%';
//     popupBody.style.marginTop = '-250px';
//     popupBody.style.left = '50%';
//     popupBody.style.marginLeft = '-250px';
//     popupBody.style.display = 'flex';
//     popupBody.style.flexDirection = 'column';
//     popupBody.style.alignItems = 'center';
//     popupBody.style.justifyContent = 'center';
//
//     let popupContent = document.createElement('div');
//     let popupClose = document.createElement('button');
//
//     popupBody.append(popupContent, popupClose);
//
//     popupClose.innerText = 'Close';
//     popupClose.style.border = 'none';
//     popupClose.style.background = 'transparent';
//     popupClose.style.color = '#fff';
//
//     let tagName = document.createElement('p');
//     let classList = document.createElement('p');
//     let elementId = document.createElement('p');
//     let size = document.createElement('p');
//
//     popupContent.append(tagName, classList, elementId, size);
//
//     tagName.style.color = '#fff';
//     classList.style.color = '#fff';
//     elementId.style.color = '#fff';
//     size.style.color = '#fff';
//
//     let target = e.target;
//
//     tagName.innerText = 'Назва тегу: ' + target.tagName;
//     classList.innerText = 'Список класів: ' + target.classList;
//     elementId.innerText = 'ID: ' + target.id;
//     size.innerText = 'Розміри в форматі висота*ширина: ' + target.offsetHeight + '*' + target.offsetWidth;
//
//     popupClose.onclick = () => {
//         document.body.removeChild(popupBody)
//         document.onclick = () => {
//
//         }
//     }
// }   // зробив щоб модалка створювалась і закривалась, але щоб її викликати знову потрібно оновляти сторінку, не знаю як це виправити, розумію що проблема в тому що в останньому івенті document.onclick грубо кажучи обнуляється це я зробив щоб при натисканні на кнопку закриття модалки не створювалась нова модалка з інфою про кнопку. але не знаю як це обійти.


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


let form = document.createElement('form');
let filterResult = document.createElement('div');
document.body.append(form, filterResult);

filterResult.style.display = 'flex';
filterResult.style.flexWrap = 'wrap';
filterResult.style.columnGap = '10px';
filterResult.style.rowGap = '10px';

let lable1 = document.createElement('lable');
let check1 = document.createElement('input');
let lable2 = document.createElement('lable');
let check2 = document.createElement('input');
let lable3 = document.createElement('lable');
let check3 = document.createElement('input');
let submit = document.createElement('button');


lable1.innerText = 'status - false - ';
lable2.innerText = 'older then 29 - ';
lable3.innerText = 'city - Kyiv - ';

check1.setAttribute('type', 'checkbox');
check2.setAttribute('type', 'checkbox');
check3.setAttribute('type', 'checkbox');

submit.innerText = 'Filter';


lable1.append(check1);
lable2.append(check2);
lable3.append(check3);
form.append(lable1, lable2, lable3, submit);


function filterResultCreator(array) {
    for (user of array) {
        let id = document.createElement('p');
        let name = document.createElement('p');
        let age = document.createElement('p');
        let status = document.createElement('p');
        let city = document.createElement('p');
        let userBox = document.createElement('div');

        filterResult.append(userBox);
        userBox.append(id, name, age, status, city);

        userBox.style.background = 'lightgrey';
        userBox.style.border = '1px solid #000';
        userBox.style.width = '100px';
        userBox.style.padding = '10px';


        id.innerText = 'ID:  ' + user.id;
        name.innerText = 'Name:  ' + user.name;
        age.innerText = 'Age:  ' + user.age;
        status.innerText = 'Status:  ' + user.status;
        city.innerText = 'City:  ' + user.address.city;
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
}

submit.onclick = () => {
    if (check1.checked && check2.checked && check3.checked) {
        filterResultCreator(usersWithAddress.filter(value => !value.status && +value.age > 29 && value.address.city === 'Kyiv'));
    } else if (check2.checked && check3.checked) {
        filterResultCreator(usersWithAddress.filter(value => +value.age > 29 && value.address.city === 'Kyiv'));
    } else if (check1.checked && check3.checked) {
        filterResultCreator(usersWithAddress.filter(value => !value.status && value.address.city === 'Kyiv'));
    } else if (check1.checked && check2.checked) {
        filterResultCreator(usersWithAddress.filter(value => !value.status && +value.age > 29));
    } else if (check3.checked) {
        filterResultCreator(usersWithAddress.filter(value => value.address.city === 'Kyiv'));
    } else if (check2.checked) {
        filterResultCreator(usersWithAddress.filter(value => +value.age > 29));
    } else if (check1.checked) {
        filterResultCreator(usersWithAddress.filter(value => !value.status));
    } else {
        filterResultCreator(usersWithAddress);
    }
}  //ще не розібрався як зробити щоб дані перезепаписувались а не просто добавлялись в дів.

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне



//---------Ще не осилив-------//




// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let images = [
    'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png',
    'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
    'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png',
    'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png',
    'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
];

let sliderContainer = document.createElement('div');
let sliderLine = document.createElement('div');
document.body.append(sliderContainer);
sliderContainer.append(sliderLine)

sliderContainer.style.width = '200px';
sliderContainer.style.height = '350px';
sliderContainer.style.position = 'relative';
sliderContainer.style.overflow = 'hidden';


sliderLine.style.display = 'flex';
sliderLine.style.position = 'absolute';
sliderLine.style.left = '0px';
sliderLine.style.transition = 'all ease 0.5s';

for (image of images) {
    let img = document.createElement('img');
    img.setAttribute('src', image);
    sliderLine.append(img);
    img.style.width = '200px';
    img.style.height = '350px';

}

let i = 0;
document.onkeydown = (e) => {
    if ( e.key === 'ArrowRight'){
        i = i + 200;
        if (i > (images.length - 1) * 200){
            i = 0;
        }
        sliderLine.style.left = -i + 'px';
    } else if (e.key === 'ArrowLeft'){
        i = i - 200;
        if (i < 0){
            i = (images.length - 1) * 200;
        }
        sliderLine.style.left = -i + 'px';
    }
}


//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

//------Ще не осилив-----//