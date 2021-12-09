// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let wrapper = document.createElement('div');
document.body.append(wrapper);
wrapper.style.display = 'flex';
wrapper.style.alignItems = 'center';
wrapper.style.columnGap = '15px';
wrapper.style.rowGap = '15px';
wrapper.style.flexWrap = 'wrap';

let favorites = [];

for (const user of users) {
    let userBlock = document.createElement('div');
    wrapper.append(userBlock)


    userBlock.style.background = 'lightgrey';
    userBlock.style.padding = '10px';

    let name = document.createElement('p');
    let age = document.createElement('p');
    let status = document.createElement('p');
    let addToFavorites = document.createElement('button');

    name.innerText = user.name;
    age.innerText = user.age;
    status.innerText = user.status;
    addToFavorites.innerText = 'Add to favorites';


    userBlock.append(name, age, status, addToFavorites);

    function addRemoveFavorites() {
        favorites.push(user);
        localStorage.removeItem('favorites');
        localStorage.setItem('favorites', JSON.stringify(favorites));
        addToFavorites.innerText = 'Remove from favorites';
        addToFavorites.onclick = () => {
            let i = favorites.indexOf(user);
            favorites.splice(i, 1);
            localStorage.removeItem('favorites');
            localStorage.setItem('favorites', JSON.stringify(favorites));
            addToFavorites.innerText = 'Add to favorites';
            addToFavorites.onclick = () => {
                addRemoveFavorites();
            }
        }
    }


    addToFavorites.onclick = () => {
        addRemoveFavorites();
    }
}

