// task1   - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//           Вивести кожну змінну за допомогою: console.log , alert, document.write

//
// let str1 = 'hello';
// let str2 = 'owu';
// let str3 = 'com';
// let str4 = 'ua';
// let num1 = 1;
// let num2 = 10;
// let numNegative = -999;
// let num3 = 123;
// let num4 = 3.14;
// let num5 = 2.7;
// let num6 = 16;
// let booleanPositive = true;
// let booleanNegative = false;


// task2


// console.log(str1);
// alert(str1);
// document.write(str1 + "<br/>");
// console.log(str2);
// alert(str2);
// document.write(str2 + "<br/>");
// console.log(str3);
// alert(str3);
// document.write(str3 + "<br/>");
// console.log(str4);
// alert(str4);
// document.write(str4 + "<br/>");
// console.log(num1);
// alert(num1);
// document.write(num1 + "<br/>");
// console.log(num2);
// alert(num2);
// document.write(num2 + "<br/>");
// console.log(numNegative);
// alert(numNegative);
// document.write(numNegative + "<br/>");
// console.log(num3);
// alert(num3);
// document.write(num3 + "<br/>");
// console.log(num4);
// alert(num4);
// document.write(num4 + "<br/>");
// console.log(num5);
// alert(num5);
// document.write(num5 + "<br/>");
// console.log(num6);
// alert(num6);
// document.write(num6 + "<br/>");
// console.log(booleanPositive);
// alert(booleanPositive);
// document.write(booleanPositive + "<br/>");
// console.log(booleanNegative);
// alert(booleanNegative);
// document.write(booleanNegative);
//

// task3        - Переприсвоїти кожній змінній з завдання значення на довільне.
//                Вивести кожну змінну за допомогою: console.log , alert, document.write


// str1 = 'name';
// str2 = 'title';
// str3 = 'script';
// str4 = 'work';
// num1 = 23;
// num2 = 65;
// numNegative = -784;
// num3 = 987;
// num4 = 6.19;
// num5 = 5.29;
// num6 = 105;
// booleanPositive = 'Friday';
// booleanNegative = 75;


// task4


// console.log(str1);
// alert(str1);
// document.write(str1 + "<br/>");
// console.log(str2);
// alert(str2);
// document.write(str2 + "<br/>");
// console.log(str3);
// alert(str3);
// document.write(str3 + "<br/>");
// console.log(str4);
// alert(str4);
// document.write(str4 + "<br/>");
// console.log(num1);
// alert(num1);
// document.write(num1 + "<br/>");
// console.log(num2);
// alert(num2);
// document.write(num2 + "<br/>");
// console.log(numNegative);
// alert(numNegative);
// document.write(numNegative + "<br/>");
// console.log(num3);
// alert(num3);
// document.write(num3 + "<br/>");
// console.log(num4);
// alert(num4);
// document.write(num4 + "<br/>");
// console.log(num5);
// alert(num5);
// document.write(num5 + "<br/>");
// console.log(num6);
// alert(num6);
// document.write(num6 + "<br/>");
// console.log(booleanPositive);
// alert(booleanPositive);
// document.write(booleanPositive + "<br/>");
// console.log(booleanNegative);
// alert(booleanNegative);
// document.write(booleanNegative);


// task5   - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)


// let firstName = 'Shvets';
// let middleName = 'Mykola';
// let lastName = 'Ivanovych';
// let person = firstName + middleName + lastName;


//task6   - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//           Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".


// let name = prompt("Ім'я: ");
// let lastName = prompt("По-Батькові: ");
// let age = prompt("Вік: ");
//
// alert(`Вітаю ${name} ${lastName}. Тобі ${age} років`);


// task7  - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.


// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);


// task8    - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//            В однакових виразах не використовувати однакові оператори!!!
//            5 ? 6 -> true
//            5 ? 6 -> false
//            5 ? 6 -> false
//            5 ? 6 -> false
//            10 ? 10 -> true
//            10 ? 10 -> true
//            10 ? 10 -> false
//            10 ? 10 -> false
//            10 ? 10 -> false
//            123 ? '123' -> false
//            123 ? '123' -> true


// console.log(5 < 6);
// console.log(5 === 6);
// console.log(5 > 6);
// console.log(5 >= 6);
// console.log(10 === 10);
// console.log(10 >= 10);
// console.log(10 !== 10);
// console.log(10 > 10);
// console.log(10 < 10);
// console.log(123 === '123');
// console.log(123 !== '123');


// task9    - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?


// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");  //  у даному випадку відбувається об'єднання за рахунок оператора + .
// document.write(str - a + "<br/>");  //  у трьох інших  випадках js розпізнає арифметичні дії і зводить строки до чисел і проводить арифметичну дію
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");