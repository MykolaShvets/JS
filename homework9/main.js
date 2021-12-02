// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.background = 'darkred';
div.style.color = 'white';
div.style.fontSize = '24px';
document.body.appendChild(div);
document.body.appendChild(div.cloneNode(true));


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


let menuList = ['Main', 'Products', 'About us', 'Contacts'];
    let menu = document.getElementsByClassName('menu');

for (let item of menuList) {
    let li = document.createElement('li');
    menu[0].append(li);
    li.innerText = item;
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];



for (const course of coursesAndDurationArray) {
    let div1 = document.createElement('div');
    document.body.append(div1);
    div1.innerText = course.title + ' ' + course.monthDuration;
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let div2 = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    div2.append(h1, p);
    document.body.append(div2);
    div2.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description')
    h1.innerText = course.title;
    p.innerText = course.monthDuration;
}