//
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNumber(a, b, c) {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {

        if (a < b && a < c) {
            console.log(a);
        } else if (b < a && b < c) {
            console.log(b);
        } else if (c < a && c < b) {
            console.log(c);
        }
    }
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNumber(a, b, c) {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {

        if (a > b && a > c) {
            console.log(a);
        } else if (b > a && b > c) {
            console.log(b);
        } else if (c > a && c > b) {
            console.log(c);
        }
    }
}


// - створити функцію яка повертає найбільше число з масиву

function maxNumReturn(array) {
    let maxNum = array[0];
    for (num of array) {
        if (num > maxNum) {
            maxNum = num;
        }
    }

    return maxNum
}

// - створити функцію яка повертає найменьше число з масиву

function minNumReturn(array) {
    let minNum = array[0];
    for (num of array) {
        if (num < minNum) {
            minNum = num;
        }
    }

    return minNum
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumOfArray(array) {
    let sum = 0;
    for (const num of array) {
        sum += num;
    }
    return sum;
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arithmeticMeanOfArray(array){
    return sumOfArray(array) / array.length;
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minReturnMaxLog(){
    let maxNum = arguments[0];
    for (num of arguments) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    console.log(maxNum);

    let minNum = arguments[0];
    for (num of arguments) {
        if (num < minNum) {
            minNum = num;
        }
    }
    return minNum;
}

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomArray(sizeOfArray){
    let arr = [];
    for (let i = 0; i < sizeOfArray; i++){
        arr[i] = Math.round(Math.random()*100);
    }
    return arr;
}

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomArrayWithLimit(sizeOfArray, limit){
    let arr = [];
    for (let i = 0; i < sizeOfArray; i++){
        arr[i] = Math.round(Math.random()*limit);
    }
    return arr;
}

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1]

function reversArray(array){
    let reverse = [];
    for (let i = array.length - 1, a = 0; i >= 0; i--, a++) {
        reverse[a] = array[i];
    }
    return reverse;
}
