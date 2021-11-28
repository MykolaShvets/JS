// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [
    new User(93, 'mykola', 'shvets', 'mykolasv@gmail.com', '+380638137009'),
    new User(56, 'igor', 'kravets', 'igork@gmail.com', '+380635461224'),
    new User(61, 'vasya', 'markiw', 'vmark@gmail.com', '+380639453721'),
    new User(24, 'natalia', 'demkiw', 'natadem@gmail.com', '+380634831652'),
    new User(71, 'petro', 'tkach', 'tkagh1212@gmail.com', '+380634594215'),
    new User(92, 'svitlana', 'zelena', 'greensveta@gmail.com', '+380637815467'),
    new User(29, 'anna', 'chervona', 'annachervon@gmail.com', '+380632615487'),
    new User(83, 'ira', 'dragomanova', 'drago1997@gmail.com', '+380639461357'),
    new User(5, 'dima', 'serafimov', 'serafdmitro@gmail.com', '+380639768341'),
    new User(12, 'nadia', 'hrinchak', 'nadiahrnch@gmail.com', '+380636895468')
]


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = users.filter((user) => {
    if (user.id % 2 === 0) {
        return user;
    }
});

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = users.sort((a, b) => a.id - b.id);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone)
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(93, 'mykola', 'shvets', 'mykolasv@gmail.com', '+380638137009', ['iphone', 'xiaomi', 'sumsung']),
    new Client(56, 'igor', 'kravets', 'igork@gmail.com', '+380635461224', ['macboock', 'lenovo', 'asus', 'acer']),
    new Client(61, 'vasya', 'markiw', 'vmark@gmail.com', '+380639453721', ['renault', 'vw', 'bmv', 'mb', 'jeep']),
    new Client(24, 'natalia', 'demkiw', 'natadem@gmail.com', '+380634831652', ['bosch', 'rowenta', 'tefal', 'redmond']),
    new Client(71, 'petro', 'tkach', 'tkagh1212@gmail.com', '+380634594215', ['fender', 'ibanez', 'gibson']),
    new Client(92, 'svitlana', 'zelena', 'greensveta@gmail.com', '+380637815467', ['logitech', 'a4tech', 'razer']),
    new Client(29, 'anna', 'chervona', 'annachervon@gmail.com', '+380632615487', ['nintendo', 'ps5', 'x-box one']),
    new Client(83, 'ira', 'dragomanova', 'drago1997@gmail.com', '+380639461357', ['whisky', 'brandy', 'wine', 'beer']),
    new Client(5, 'dima', 'serafimov', 'serafdmitro@gmail.com', '+380639768341', ['burger', 'piza']),
    new Client(12, 'nadia', 'hrinchak', 'nadiahrnch@gmail.com', '+380636895468', ['suzuki', 'kawasaky'])
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortByOrder = clients.sort((a, b) => a.order.length - b.order.length);
