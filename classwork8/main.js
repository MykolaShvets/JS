// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').className = 'sep-21';
// b) робить шириниу елементу ul 400px

let ulColection = document.getElementsByTagName('ul');
for (const ul of ulColection) {
    ul.style.width = '400' + 'px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList')
for (const link of linkList) {
    link.style.width = '50' + '%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let listElement2 = document.getElementsByClassName('listElement2');
for (const list of listElement2) {
    let innerText = list.innerText;
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liList = document.getElementsByTagName('li');
for (const li of liList) {
    li.style.background = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aList = document.getElementsByTagName('a');
for (const a of aList) {
    a.classList.add('anhor')
    if (a.innerText === 'link3'){
        a.style.fontSize = '40' + 'px';
    }
    a.classList.add(`element__${a.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header');
let bg = prompt('Which background color???');
for (const header of subHeader) {
    header.style.background = bg;
}
// другий варіант для того щоб обрати колір кожному елементу окремо;
// for (const header of subHeader) {
//     header.style.background = prompt('Which background color???');;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let textColor = prompt('Which text color???');
for (const header of subHeader) {
    if(header.innerText === 'content 2 segment'){
        header.style.color = textColor;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content1 = document.getElementsByClassName('content_1');
let txt = prompt('Text for content-1');
for (const content of content1) {
    content.innerText = txt;
}

// l) отримати елементи p та змінити їм padding на 20px

let pElements = document.getElementsByTagName('p');
for (const p of pElements) {
    p.style.padding = '20' + 'px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text2 = document.getElementsByClassName('text2');
for (const text of text2) {
    text.innerText = 'sep-2021';
}
