let wrapper = document.createElement('div');
document.body.append(wrapper);
wrapper.style.display = 'flex';
wrapper.style.alignItems = 'center';
wrapper.style.columnGap = '15px';
wrapper.style.rowGap = '15px';
wrapper.style.flexWrap = 'wrap';

let favorites =JSON.parse(localStorage.getItem('favorites'))

for (const user of favorites) {
    let userBlock = document.createElement('div');
    wrapper.append(userBlock)


    userBlock.style.background = 'lightgrey';
    userBlock.style.padding = '10px';

    let name = document.createElement('p');
    let age = document.createElement('p');
    let status = document.createElement('p');

    name.innerText = user.name;
    age.innerText = user.age;
    status.innerText = user.status;


    userBlock.append(name, age, status);
}


