// 1. Створити пустий масив та :

// let array = [];

// a. заповнити його 50 парними числами за допомоги циклу.

// let a = 2;
// for (let i = 0; i < 50; i++, a+=2){
//         array[i] = a;
// }


// b. заповнити його 50 непарними числами за допомоги циклу.

// let b = 1;
// for (let i = 0; i <50; i++, b += 2){
//     array[i] = b;
// }


// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)


// for (let i = 0; i < 20; i++){
//     array[i] = Math.floor(Math.random() * 100);
// }
// console.log(array);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// for (let i = 0; i < 20; i++){
//     array[i] = Math.floor(Math.random() * 733) + 8;
// }
// console.log(array);

// 2. Вивести за допомогою console.log кожен третій елемен  //використав масив що створював в завданні 1.d

// for (let i = 2; i <= array.length - 1; i += 3){
//     console.log(array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним. //використав масив що створював в завданні 1.d
// for (let i = 2; i <= array.length - 1; i += 3){
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив //використав масив що створював в завданні 1.d

// let secondArray = [];
// for (let i = 2; i <= array.length - 1; i += 3){
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//         secondArray[secondArray.length] = array[i];
//     }
// }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним //використав масив що створював в завданні 1.d
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// for (let i = 0; i <= array.length - 1; i++){
//     if (array[i + 1] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let prices = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i <= prices.length - 1; i++){
//     sum += prices[i];
// }
// console.log(sum / prices.length)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let smallArray = [3, 40, 23, 86, 92, 143];
// let bigArray = [];
// for (const item of smallArray){
//     bigArray[bigArray.length] = item * 5;
// }

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let mixArray = [false, 'title', 54, 485, 'cat', true, 4>8, 564, 872, '654', 343];
// let numArray = [];
// for (const element of mixArray){
//     if (typeof element === "number"){
//         numArray[numArray.length] = element;
//     }
// }
//
// console.log(numArray);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//


//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];
//
// for (let user of usersWithId){
//     for (let key in user){
//         for (let city of citiesWithId){
//             for (let key2 in city){
//                 if(user[key] === city[key2]){
//                     user.address = city;
//                     usersWithCities[usersWithCities.length] = user;
//                 }
//             }
//         }
//     }
// }
// console.log(usersWithCities);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let numbers = [23, 45, 26, 54, 89, 47, 22, 83, 64, 92];
// for (let number of numbers){
//     if (number % 2 === 0){
//         console.log(number);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let numbers = [23, 45, 26, 54, 89, 47, 22, 83, 64, 92];
// let secondNumbers = [];
// for (const number of numbers){
//     if (number % 2 === 0){
//         secondNumbers[secondNumbers.length] = number;
//     }
// }
//
// console.log(secondNumbers);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let a = [ 'a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < a.length; i++){
//     word += a[i];
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let a = [ 'a', 'b', 'c'];
// let word = '';
// let i = 0;
// while (i < a.length){
//     word += a[i];
//     i++;
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let a = [ 'a', 'b', 'c'];
// let word = '';
//
// for (const letter of a){
//     word += letter;
// }
// console.log(word);