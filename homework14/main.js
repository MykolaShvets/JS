//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// 1 - Прокинутись
// 2 - Вигуляти собаку
// 3 - нагодувати собаку
// 4 - зарядка
// 5 - душ
// 6 - сніданок
// 7 - перегляд лекції
// 8 - зробити домашку
// 9 - відпочити
// 10 - пообідати
// 11 - купити продукти
// 12 - вигуляти собаку
// 13 - нагодувати собаку
// 14 - повечеряти
// 15 - лягти спати

function wakeUp(isWakeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWakeUp) {
                console.log('1.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 500)
    })
}

function walkWithDog(isWalkWithDog) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWalkWithDog) {
                console.log('2.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 1000)
    })
}

function feedDog(isFeedDog) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isFeedDog) {
                console.log('3.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 300)
    })
}

function morningCharge(isMorningCharge) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isMorningCharge) {
                console.log('4.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 3000)
    })
}

function shower(isShower) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isShower) {
                console.log('5.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 687)
    })
}

function breakfast(isBreakfast) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isBreakfast) {
                console.log('6.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 567)
    })
}

function viewingLection(isViewingLection) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isViewingLection) {
                console.log('7.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 985)
    })
}

function makeHw(isMakeHw) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isMakeHw) {
                console.log('8.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 675)
    })
}

function makeBreak(isMakeBreak) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isMakeBreak) {
                console.log('9.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 859)
    })
}

function dinner(isDinner) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDinner) {
                console.log('10.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 348)
    })
}

function goToShop(isGoToShop) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isGoToShop) {
                console.log('11.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 734)
    })
}

function walkWithDogAgain(isWalkWithDogAgain) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWalkWithDogAgain) {
                console.log('12.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 1000)
    })
}

function feedDogAgain(isFeedDogAgain) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isFeedDogAgain) {
                console.log('13.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 300)
    })
}

function supper(isSupper) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSupper) {
                console.log('14.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 3000)
    })
}

function goToSleep(isGoToSleep) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isGoToSleep) {
                console.log('15.Done!');
                resolve(true);
            } else {
                reject(false);
            }
        }, 687)
    })
}

///////////////////////////////////////////////////////////////////////////////
// wakeUp(true).then(result => {
//     return walkWithDog(result);
// }).then(result => {
//     return feedDog(result)
// }).then(result => {
//     return morningCharge(result);
// }).then(result => {
//     return shower(result);
// }).then(result => {
//     return breakfast(result);
// }).then(result => {
//     return viewingLection(result);
// }).then(result => {
//     return makeHw(result);
// }).then(result => {
//     return makeBreak(result);
// }).then(result => {
//     return dinner(result);
// }).then(result => {
//     return goToShop(result);
// }).then(result => {
//     return walkWithDogAgain(result);
// }).then(result => {
//     return feedDogAgain(result);
// }).then(result => {
//     return supper(result);
// }).then(result => {
//     return goToSleep(result);
// })
///////////////////////////////////////////////////////////////////////////////
async function day(status){
    const res1 = await wakeUp(status);
    const res2 = await walkWithDog(res1);
    const res3 = await feedDog(res2);
    const res4 = await morningCharge(res3);
    const res5 = await shower(res4);
    const res6 = await breakfast(res5);
    const res7 = await viewingLection(res6);
    const res8 = await makeHw(res7);
    const res9 = await makeBreak(res8);
    const res10 = await dinner(res9);
    const res11 = await goToShop(res10);
    const res12 = await walkWithDogAgain(res11);
    const res13 = await feedDogAgain(res12);
    const res14 = await supper(res13);
    const res15 = await goToSleep(res14);
}

day(true);
