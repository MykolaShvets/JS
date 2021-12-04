// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let txt = document.createElement('p');
let btn1 = document.createElement('button');
document.body.append(btn1, txt);
btn1.innerText = 'Delete text';
txt.innerText = 'Some text';
txt.setAttribute('id', 'text');


btn1.onclick = () => {
    txt.style.display = 'none';
}


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn2 = document.createElement('button');
document.body.append(btn2);
btn2.innerText = 'Delete myself';

btn2.onclick = () => {
    btn2.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let input = document.createElement('input');
input.setAttribute('placeholder', 'Enter your age.');
input.setAttribute('type', 'number');
let btn3 = document.createElement('button');
btn3.innerText = 'Verificate';
document.body.append(input, btn3);
btn3.onclick = () => {
    if (input.value < 18) {
        alert('User younger then 18!!!');
    } else {
        console.log('User older then 18');
    }
}


// - Создайте меню, которое раскрывается/сворачивается при клике
let menuDiv = document.createElement('div');
menuDiv.style.marginTop = '20px';
document.body.append(menuDiv);


let menuArray = ['Home', 'About', 'Gallery', 'Contacts'];

let menuBtn = document.createElement('button');
menuBtn.innerText = 'Menu';

let menuList = document.createElement('ul');
menuList.style.width = '150px';
menuList.style.padding = '20px';
menuList.style.background = 'lightgrey';
menuList.style.listStyle = 'none';
menuList.style.display = 'none';
menuList.style.alignItems = 'center';
menuList.style.flexDirection = 'column';
menuList.style.rowGap = '10px';

menuDiv.append(menuBtn, menuList);

for (const item of menuArray) {
    let menuItem = document.createElement('li');
    let menuLink = document.createElement('a');
    menuLink.setAttribute('href', '#');
    menuList.append(menuItem);
    menuItem.append(menuLink);
    menuLink.innerText = item;
}


menuBtn.onclick = () => {
    if (menuList.style.display === 'flex') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'flex';
    }
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


let comments = [
    {title: 'comment 1', body: 'lorem ipsum dolo sit ameti'},
    {title: 'comment 2', body: 'lorem ipsum dolo sit ameti'},
    {title: 'comment 3', body: 'lorem ipsum dolo sit ameti'},
    {title: 'comment 4', body: 'lorem ipsum dolo sit ameti'},
    {title: 'comment 5', body: 'lorem ipsum dolo sit ameti'},
    {title: 'comment 6', body: 'lorem ipsum dolo sit ameti'}
];


let commentsDiv = document.createElement('div')
document.body.append(commentsDiv);

commentsDiv.style.marginTop = '30px';
commentsDiv.style.padding = '20px';
commentsDiv.style.background = 'lightblue';

let title = document.createElement('h1');
title.innerText = 'Coments:';

commentsDiv.append(title);


for (const comment of comments) {
    let commentBox = document.createElement('div');
    let commentTitle = document.createElement('h3');
    let hideBtn = document.createElement('button');
    let commentBody = document.createElement('p');

    commentsDiv.append(commentBox);
    commentBox.append(commentTitle, hideBtn, commentBody);

    commentBox.style.border = '1px solid black';
    commentBox.style.padding = '10px';
    commentBox.style.margin = '10px';

    commentBody.style.display = 'block';

    commentTitle.innerText = comment.title;
    hideBtn.innerText = 'Hide';
    commentBody.innerText = comment.body;

    hideBtn.onclick = () => {
        if (commentBody.style.display === 'block'){
            commentBody.style.display = 'none';
            hideBtn.innerText = 'Show';
        } else {
            commentBody.style.display = 'block';
            hideBtn.innerText = 'Hide';
        }
    }

}

