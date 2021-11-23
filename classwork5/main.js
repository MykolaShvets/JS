// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let min = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    }

}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let max = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    }

}

// - створити функцію яка повертає найбільше число з масиву

let maxNumber = (arr) => {
    let maxNum = arr[0];
    for (const num of arr) {
        if (num > maxNum)
            maxNum = num;
            }
    return maxNumber;
}

// - створити функцію яка повертає найменьше число з масиву

let minNumber = (arr) => {
    let minNum = arr[0];
    for (const num of arr) {
        if (num > minNum)
            minNum = num;
    }
    return minNumber;
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumOfArr = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num
    }
    return sum;
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arithmeticMeanOfArray = (array) => sumOfArray(array) / array.length;


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minReturnMaxLog = (...arr) =>{
    let maxNum = arr[0];
    for (num of arr) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    console.log(maxNum);

    let minNum = arr[0];
    for (num of arr) {
        if (num < minNum) {
            minNum = num;
        }
    }
    return minNum;
}

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomArr = (sizeOfArr) => {
    let arr = [];
    for (let i = 0; i < sizeOfArr; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomArrayLim = (sizeOfArr, lim) => {
    let arr = [];
    for (let i = 0; i < sizeOfArr; i++) {
        arr[i] = Math.round(Math.random() * lim);
    }
    return arr;
}

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reversArr = (array) => {
    let reverse = [];
    for (let i = array.length - 1, a = 0; i >= 0; i--, a++) {
        reverse[a] = array[i];
    }
    return reverse;
}