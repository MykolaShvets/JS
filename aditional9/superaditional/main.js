let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let userAddress = [];

for (const user of users) {
    userAddress.push(user.address);
}
// console.log(userAddress);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

for (const user of users){
    let userBlock = document.createElement('div');
    document.body.append(userBlock);
    userBlock.innerText =` ${user.name}; ${user.age}; ${user.status}; ${user.address.city}; ${user.address.country}; ${user.address.street}; ${user.address.houseNumber};`;
}



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for (const user1 of users){
    let userBox = document.createElement('div');
    document.body.append(userBox);
    userBox.style.margin = '30px';
    for (const item in user1){
        let userItem = document.createElement('div');
        userBox.append(userItem);
        userItem.innerText = user1[item];
        if(typeof user1[item] === "object"){
            userItem.innerText = `${user1.address.city}; ${user1.address.country}; ${user1.address.street}; ${user1.address.houseNumber};`;
            }
        }

}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user2 of users){
    let userContainer = document.createElement('div');
    document.body.append(userContainer);
    userContainer.style.margin = '30px';
    userContainer.style.padding = '30px';
    userContainer.style.background = 'lightgrey';
    for (const item1 in user2){
        let userItem1 = document.createElement('div');
        userContainer.append(userItem1);
        if(typeof user2[item1] === "object"){
            let addressContainer =  document.createElement('div');
            userContainer.append(addressContainer);
            for(const key in user2[item1]){
                let addressItem = document.createElement('div');
                addressContainer.append(addressItem);
                addressItem.innerText = user2[item1][key];
            }
        }  else {
            userItem1.innerText = user2[item1];
        }
    }

}
//----------------------------------------------//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let wrap = document.createElement('div');
wrap.setAttribute('id', 'wrap');
document.body.append(wrap);
let i = 1;
for (const rule of rules) {
    let ruleBlock = document.createElement('div');
    wrap.append(ruleBlock);
    ruleBlock.classList.add('rules', `rule${i++}`)
    ruleBlock.style.border = '1px solid black';
    ruleBlock.style.margin = '10px';
    ruleBlock.style.padding = '10px';
    let ruleNumber = document.createElement('h2');
    let ruleTxt = document.createElement('p')
    ruleBlock.append(ruleNumber, ruleTxt);
    ruleNumber.innerText = rule.title;
    ruleTxt.innerText = rule.body;
}