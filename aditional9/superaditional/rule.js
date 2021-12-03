// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let titles = document.getElementsByTagName('h2');
let titlesList = document.createElement('ul');
titlesList.style.listStyle = 'none';
document.getElementById('content').append(titlesList);
let i = 1;
for (const title of titles) {
    let titleItem = document.createElement('li');
    titlesList.append(titleItem);
    titleItem.innerText = i++ + ' - ' + title.innerText;
}