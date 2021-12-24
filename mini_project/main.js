// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку, при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули



// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
//

let usersDiv = document.createElement('div');
document.body.append(usersDiv);

usersDiv.classList.add('users');

fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => {
    for (const user of users) {
        let userBox = document.createElement('div');
        usersDiv.append(userBox);

        userBox.classList.add('user');

        let userTitle = document.createElement('h2');
        let detailLink = document.createElement('a');
        userBox.append(userTitle, detailLink);

        userTitle.innerText = `${user.id} - ${user.name}`;
        detailLink.innerText = 'User details';

        detailLink.setAttribute('href', '/JS/mini_project/user-details.html');


        detailLink.onclick = () => {
            localStorage.setItem(`user`, JSON.stringify(user));
        }

        // додатково зробив функцію щоб можна було відкрити в новій вкладці за допомогою ПКМ або СКМ;
        detailLink.onauxclick = () => {
            localStorage.setItem(`user`, JSON.stringify(user));
        }

    }
})
