// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

 let numbers = [43, 21, 8, 23, 78, 16, 37, 65, 98, 33];

 let result = numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+numbers[7]+numbers[8]+numbers[9];

 console.log(result);


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: 'Dr Jekyll and Mr Hyde and Other Stories',
    numberOfPages: 256,
    genre: 'horor'
};

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
//*незнаю чи я  правильно зрозумів але вирішив просто переприсвоїти.
 book = {
    name: 'Dr Jekyll and Mr Hyde and Other Stories',
    numberOfPages: 256,
    genre: 'horor',
    authors: 'Robert Louis Stevenson'
};

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// перший об'єкт з масиву взятий з попереднього завдання.

book1 = {
    name: 'I, Robot',
    numberOfPages: 276,
    genre: 'sci-fi',
    authors: 'Isaac Asimov'
};
book2 = {
    name: 'A Clockwork Orange',
    numberOfPages: 144,
    genre: 'sci-fi',
    authors: 'Anthony Burgess'
};
book3 = {
    name: 'Daybreak',
    numberOfPages: 160,
    genre: 'horor',
    authors: 'Brian Ralph'
};


let books = [book, book1, book2, book3];

console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
console.log(books[3]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height + width;
console.log(s + ' cm^2');

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let v= 3.14 * (dC / 2)**2 * heightC;
console.log(v + ' m^3');

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).


let n = 3;
let m = 4;
let k =Math.sqrt(n**2 + m**2);
console.log(k);//не впевнений що правильно використав функцію але результат виводить правильний.