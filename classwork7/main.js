// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, brand, year, maxSpeed, engineVol) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVol = engineVol;
    this.drive = () => console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`);
    this.info = function () {
        for (const item in this) {
            if (typeof this[item] !== "function") {
                console.log(`${item} - ${this[item]}`);
            }
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        return this.year = newValue;
    };
    this.addDriver = function (driver) {
        return this.driver = driver;
    };
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, brand, year, maxSpeed, engineVol) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVol = engineVol;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };
    info() {
        for (const item in this) {
            if (typeof this[item] !== "function") {
                console.log(`${item} - ${this[item]}`);
            }
        }
    };
    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed += newSpeed;
    };
    changeYear(newValue) {
        return this.year = newValue;
    };
    addDriver(driver) {
        return this.driver = driver;
    };
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
}

let cinderelas = [
    new Cinderella('ira', 18, 39),
    new Cinderella('nina', 19, 36),
    new Cinderella('nadia', 25, 37),
    new Cinderella('natalia', 23, 38),
    new Cinderella('anna', 19, 41),
    new Cinderella('alina', 20, 40),
    new Cinderella('olga', 25, 35),
    new Cinderella('zoryana', 20, 42),
    new Cinderella('tanya', 21, 43),
    new Cinderella('maria', 18, 44)
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince{
    constructor(name, age, slipperSize) {
        this.name = name;
        this.age = age;
        this.slipperSize = slipperSize;
    };
}

let prince  = new Prince ('ivan', 25, 38);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let cinderella1 = () => {
    for (const cinderella of cinderelas) {
        if(cinderella.footSize === prince.slipperSize){
            return cinderella;
        }
    }

}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let cinderella2  = cinderelas.find((cinderella) => cinderella.footSize === prince.slipperSize);
