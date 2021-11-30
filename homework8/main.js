// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let content = document.getElementById("content").innerText;

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules').innerText;

// -- замініть текст параграфа з id 'content' на будь-який інший

document.getElementById("content").innerText = 'Helo okten!'; // саме запис content = 'Helo okten!'  не працює хоча в попередніх завданнях саме таке значення давав змінній.

// -- замініть текст параграфа з id 'rules' на будь-який інший

document.getElementById('rules').innerText = 'This is HW from the 8-th lesson'; // саме запис rules = 'This is HW from the 8-th lesson' не працює хоча в попередніх завданнях саме таке значення давав змінній.

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій

let everyElements = document.body;
for (const element of everyElements.children) {
    element.style.background = 'red';
    element.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(document.getElementById('rules').className);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rules = document.getElementsByClassName('fc_rules');
for (const item of fc_rules) {
    item.style.color = 'darkred';
}
