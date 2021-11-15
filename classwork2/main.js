
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('Enter the number:');
// let b = +prompt('Enter the number:');
// if (a > b){
//     console.log(a)
// } else if (b <= a) {
//     console.log(`${a} = ${b}`)
// } else {
//     console.log(b)
// };



// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let flat = +prompt('Enter the number of flat:');
// if (flat > 0 && flat <= 20){
//     alert('The first entrance')
// } else if (flat <= 48){
//     alert('The second entrance')
// } else if (flat <= 90){
//     alert('The third entrance')
// } else{
//     alert('Wrong number')
// };

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let a = +prompt('Enter the number:') === 10? alert('ВІРНО') : alert('НЕВІРНО');

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = '';
//
// if(typeof x === 'number'){
//     console.log('1')
// }else if (typeof x === 'string'){
//     console.log('2')
// }else if (typeof x === 'boolean'){
//     console.log('3')
// }else if (typeof x === 'object'){
//     console.log('4')
// }else{
//     console.log('something else')
// };


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let a = +prompt('Enter the temperature:');
// if(a >= 10 && a<= 22){
//     console.log('Mи йдемо ВЧИТИСЯ')
// } else{
//     console.log('Mи сидимо вдома і вчимося ОНЛАЙН')
// };


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .


// let a = prompt('Enter the number from 1 to 5:');
// switch (a){
//     case'1':
//         console.log('You win AUTO');
//         break;
//     case'2':
//         console.log('You win MOTO');
//         break;
//     case'3':
//         console.log('You win IPHONE');
//         break;
//     case'4':
//         console.log('You win PLAYSTATION 5');
//         break;
//     case'5':
//         console.log('You win XBOX ONE');
//         break;
//     default:
//         console.log('You lose.');
// }
