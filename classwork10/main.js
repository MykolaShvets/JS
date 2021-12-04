// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let formsBlock = document.createElement('div');
document.body.append(formsBlock);

let form1 = document.createElement('form');
let form2 = document.createElement('form');
form1.setAttribute('id', 'f1');
form2.setAttribute('id', 'f2');
let btn1 = document.createElement('button');
let btn2 = document.createElement('button');
btn1.innerText = 'form1';
btn2.innerText = 'form2';
formsBlock.append(form1, btn1, form2, btn2);

let imputName = document.createElement('input');
let imputAge = document.createElement('input');
let imputEmail = document.createElement('input');
let imputStatus = document.createElement('input');
imputName.setAttribute('type', 'text');
imputName.setAttribute('name', 'name');
imputAge.setAttribute('type', 'number');
imputAge.setAttribute('name', 'age');
imputEmail.setAttribute('type', 'email');
imputEmail.setAttribute('name', 'email');
imputStatus.setAttribute('type', 'checkbox');
imputStatus.setAttribute('name', 'status');
form1.append(imputName, imputAge);
form2.append(imputEmail, imputStatus);


btn1.onclick = () => {
    console.log('name: ' + document.forms.f1.name.value);
    console.log('age: ' + document.forms.f1.age.value);
}

btn2.onclick = () => {
    console.log('email: ' + document.forms.f2.email.value);
    console.log('status: ' + document.forms.f2.status.checked);
}



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let tableBlock = document.createElement('div');
document.body.append(tableBlock);

let row = document.createElement('input');
let column = document.createElement('input');
let content = document.createElement('input');
let btn = document.createElement('button');
tableBlock.append(row, column, content, btn);

row.setAttribute('type', 'number');
column.setAttribute('type', 'number');
content.setAttribute('type', 'text');
btn.innerText = 'Create table';

btn.onclick = () => {
    let table = document.createElement('table');
    tableBlock.append(table);
    if(row.value > 0 && column.value > 0){
        for (let i = 1; i <= row.value; i++) {
            let tableRow = document.createElement('tr');
            table.append(tableRow);
            for (let b = 1; b <= column.value ; b++) {
                let tableColumn = document.createElement('td');
                tableRow.append(tableColumn);
                tableColumn.innerText = content.value;
                tableColumn.style.padding = '10px';
            }
        }
    }
}


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let badWords = ['fuck', 'shit', 'bitch', 'bastard'];

let wordsVerificator = document.createElement('div');
document.body.append(wordsVerificator);

let inputWord = document.createElement('input');
let btn3 = document.createElement('button');
wordsVerificator.append(inputWord, btn3);


btn3.innerText = 'check';
inputWord.setAttribute('type', 'text');
inputWord.setAttribute('placeholder', 'Enter the word');


btn3.onclick = () => {
    badWords.map((word) =>{
        if (inputWord.value === word){
            alert('It is bad word!!!');
        }
    } )
}


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
let wordsVerificator2 = document.createElement('div');
document.body.append(wordsVerificator2);


let inputWord2 = document.createElement('input');
let btn4 = document.createElement('button');
wordsVerificator2.append(inputWord2, btn4);

btn4.innerText = 'check';
inputWord2.setAttribute('type', 'text');
inputWord2.setAttribute('placeholder', 'Enter the sentence');


btn4.onclick = () => {
    let sentenceWords = inputWord2.value.split(' ');
    sentenceWords.map((word) => {
        badWords.map((item) =>{
            if (word === item){
                alert('You use the bad word!!!');
            }
        } )
    })
}
