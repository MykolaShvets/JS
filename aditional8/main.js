// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let classNames = [];
function classArray(startElement) {
        if (startElement.className) {
            for (const name of startElement.classList) {
                if (!classNames.includes(name)) {
                    classNames.push(name);
                }
            }
        }
        if (startElement.children.length) {
            for (const item of startElement.children) {
                classArray(item);
            }
        }
}

classArray(document.body);
console.log(classNames);  // получилось зробити лише для заданого ззовні масиву, якщо масив задавав в середині функції або через аргумет то на виході отримував порожній масив.