// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.


// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"].length >= 3? console.log('Це великий масив, в якому  3 і більше елементи.') :  console.log('Це маленький масив, в якому менше 3-х елементів.');


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.


// let a = +prompt('1. Enter the nuber:');
// let b = +prompt('2. Enter the nuber:');
// let c = +prompt('3. Enter the nuber:');
// if(a < b && b < c){
//     console.log(`Середнє число: ${b}`)
// }else if (a < c && c < b){
//     console.log(`Середнє число: ${c}`)
// }else if (b < a && a < c) {
//     console.log(`Середнє число: ${a}`)
//     console.log(`Перше число знаходиться між двома іншими`)
// }else if (c < a && a < b) {
//     console.log(`Середнє число: ${a}`)
//     console.log(`Перше число знаходиться між двома іншими`)
// }else if (c < b && b < a){
//     console.log(`Середнє число: ${b}`)
// }else if (b < c && c < a){
//     console.log(`Середнє число: ${c}`)
// }


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

// let result = (a + b) < 4? 'Мало' : 'Багато';

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором


// let a = +prompt('Enter the number');
// a === 0? console.log('Число є нулем') : a > 0 && a <= 100?  console.log('Число є позитивним') : a < 0 && a > -100? console.log('Число є негативним') : alert('Try again');