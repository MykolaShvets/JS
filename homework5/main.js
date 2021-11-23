// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

let rectangleSqr = (a, b) => a * b;

// - створити функцію яка обчислює та повертає площу кола

let circleSqr = (r) => 3.14 * r ** 2;

// - створити функцію яка обчислює та повертає площу циліндру

let cilinderSqr = (h, r) => h * circleSqr(r);

// - створити функцію яка приймає масив та виводить кожен його елемент

let itemOfArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let peragraph = (text) => document.write(`<p> ${text} </p>`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list = (text) => document.write(`<ul> <li>${text}</li> <li>${text}</li> <li>${text}</li> </ul> `);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let list2 = (text, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
};

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayList = (arr) => {
    document.write(`<ul>`);
    for (let item of arr) {
        document.write(`<li> ${item} </li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let objectList = (arrayOfObj) => {
    for (const item of arrayOfObj) {
        document.write(`<div>`);
        for (key in item) {
            document.write(`<p> ${key} - ${item[key]} </p>`);
        }
        document.write(`</div>`);
    }
}
