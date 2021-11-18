// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою. // Не визначився яка з функцій буде кращою для даної умови.

function fn(a, b){
    if (b === undefined){
        console.log(a);
    } else {
        console.log(a + b);
    }
}

function fn2(){
    let str = '';
    for (const arg of arguments) {
        str += arg;
    }
    console.log(str);
}


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function twoArrInOne(arr1, arr2){
    let resultArr = [];
    for (let i = 0, b = 0; i < arr1.length, b < arr2.length; i++, b++) {
        resultArr.push(arr1[i] + arr2[b]);
    }
    return resultArr;
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function arrayOfObjectKey(arr){
    let keys = [];
    for (const item of arr) {
        for (const key in item) {
            keys.push(key);
        }
    }

    return keys;
}


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


function arrayOfObjectItem(arr){
    let items = [];
    for (const item of arr) {
        for (const key in item) {
            items.push(item[key]);
        }
    }

    return items;
}

