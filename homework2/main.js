// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// let time = +prompt('Enter the number from 0 to 59:');
// if (time >= 0 && time < 15){
//     console.log('First quarter')
// } else if (time >= 15 && time < 30){
//     console.log('Second quarter')
// } else if (time >= 15 && time < 45){
//     console.log('Third quarter')
// } else if (time >= 45 && time <= 59){
//     console.log('Fourth quarter')
// } else{
//     alert('Wrong number!!! Try again.')
// };



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


// let day = +prompt('Enter the number from 1 to 31:');
// if (day > 0 && day <= 10){
//     console.log('First decade')
// } else if (day > 10 && day <= 20){
//     console.log('Second decade')
// } else if (day > 20 && day <= 31){
//     console.log('Third decade')
// }else {
//     alert('Wrong number!!! Try again.')
// };


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = confirm();
// if(test !== true){
//     console.log('Вірно')
// } else {
//     console.log('Неправильно')
// };


// let test = confirm() ? 'Неправильно' : 'Вірно';
// console.log(test);


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('Entrer the number: ');
// if (a !==0){
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// };

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let day = prompt('Enter the number of a day: ');
// switch (day){
//     case '1':
//         document.write('<ol><li>Drink coffee</li><li>Go to the walk</li><li>Play video game</li><li>Learn JS</li></ol>')
//         break;
//     case '2':
//         document.write('<ol><li>Drink tea</li><li>Drive a car</li><li>Play football</li><li>Learn JS</li></ol>')
//         break;
//     case '3':
//         document.write('<ol><li>Have a breakfast</li><li>Go to the gym</li><li>Play video game</li><li>Learn JS</li></ol>')
//         break;
//     case '4':
//         document.write('<ol><li>Have a breakfast</li><li>Read the book</li><li>Drive a car</li><li>Learn JS</li></ol>')
//         break;
//     case '5':
//         document.write('<ol><li>Drink a coffee</li><li>Drive a car</li><li>listen the music</li><li>Go to the Pub</li></ol>')
//         break;
//     case '6':
//         document.write('<ol><li>Drink a tea</li><li>Learn JS</li><li>listen the music</li><li>Go to the park</li></ol>')
//         break;
//     case '7':
//         document.write('<ol><li>Drink a coffee</li><li>Drive a car</li><li>Learn JS</li></ol>')
//         break;
//     default :
//         alert('Wrong number!!! Try again. ')
// };

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt('Enter the year:') % 4 === 0? 'Високосний' : 'Невисокосний';
// console.log(year);



// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let a = prompt('Яка «офіційна» назва JavaScript?');
if (a === 'ECMAScript'){
    console.log('Правильно!')
} else{
    alert('Не знаєте? ECMAScript!')
};