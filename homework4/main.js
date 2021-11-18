// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleSquare(a, b) {
    return  a * b;

}

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleSquare(r) {
    return 3.14 * r ** 2;

}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cilindreSquare(h, r) {
    return h * circleSquare(r);
}

// - створити функцію яка приймає масив та виводить кожен його елемент

function forArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(a) {
    document.write(`<p> ${a} </p>`);
}


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function unorderedList(liText) {
    document.write(`<ul> <li> ${liText} </li> <li> ${liText} </li> <li> ${liText} </li> </ul>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function unorderedList2(liText, liAmount) {
    if (typeof liAmount === "number") {
        document.write(`<ul>`);
        for (let i = 1; i <= liAmount; i++) {
            document.write(`<li> ${liText} </li>`);
        }
        document.write(`</ul>`);
    }
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function listMaker(array){
    document.write(`<ul>`);
    for (const item of array){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);

}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function objectPrint(array){
    for (const item of array){
        document.write(`<div>`);
        for (const key in item){
            if (key === 'id' || key === 'name' || key === 'age'){
                document.write(`<p> ${key} - ${item[key]} </p>`);
            }
        }
        document.write(`</div>`);
    }
}