// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [43, 57, 98, 1994, 18];
// console.log(numbers);
//
// let strings = ['margin', 'apple', 'car', 'table', 'cat'];
// console.log(strings);
//
// let other = [false, 34, 'margin', 'color', true];
// console.log(other);




// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let a = [];
// a[0] = 4675;
// a[1] = true;
// a[2] = 'title';
// a[3] = {name: 'Mykola', age: 27, family: true};
// console.log(a);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


// for(let i=0; i < 10; i++){
//     document.write('<div> item </div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


// for(let i=0; i < 10; i++){
//     document.write(`<div> item ${i} </div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20){
//     document.write('<h1> Title </h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 1;
// while (i <= 20){
//     document.write(`<h1> Title ${i} </h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers = [4, 56, 28, 154, 697, 153, 1523, 15477, 45, 10];
// for(let num of numbers){
//     console.log(num);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let strings = ['title', 'container', 'margin', 'padding', 'width', 'flex', 'grid', 'position', 'z-index', 'transition'];
// for (let str of strings){
//     console.log(str);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let other = [true, 45, 'play', false, 'beer', 48, 29, true, 'summer', 'winter'];
// for (let o of other){
//     console.log(o);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let a = [false, 4 < 6, 65, 'string', true, 7564, 'title', 9 < 3, 'style', '56'];
// for (const boole of a){
//     if (typeof boole === "boolean"){
//         console.log(boole);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let b = [34, false, '86', 67894, 6 < 8, 547, 'false', 309, true, 'dance'];
// for (const num of b){
//     if (typeof num === "number"){
//         console.log(num);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let c = ['title', 'music', '96875', true, 458, 5 < 897, '4 < 1', 8857, 968, 'single'];
// for (const str of c){
//     if (typeof str === "string"){
//         console.log(str);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let empt = [];
// empt[0] = true;
// empt[1] = 'false';
// empt[2] = 4 > 998;
// empt[3] = 487;
// empt[4] = '486';
// empt[5] = false;
// empt[6] = 8675;
// empt[7] = 'title';
// empt[8] = 'retro';
// empt[9] = 48223;
// for (const e of empt){
//     console.log(e);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 10; i++){
//     console.log(`${i}`);
//     document.write(`<p> ${i} </p>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i++){
//     console.log(`${i}`);
//     document.write(`<p> ${i} </p>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i+=2){
//     console.log(`${i}`);
//     document.write(`<p> ${i} </p>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++){
//     if(i % 2 === 0){
//     console.log(`${i}`);
//     document.write(`<p> ${i} </p>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++){
//     if(i % 2 > 0){
//     console.log(`${i}`);
//     document.write(`<p> ${i} </p>`);
//     }
// }
