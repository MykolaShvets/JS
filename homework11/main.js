// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let form1 = document.createElement('form');
document.body.append(form1);

let name = document.createElement('input');
let age = document.createElement('input');
let submit = document.createElement('input');


name.setAttribute('placeholder', 'Enter user name...');
age.setAttribute('type', 'number');
age.setAttribute('placeholder', 'Enter user age...');
submit.setAttribute('type', 'submit');

form1.append(name, age, submit);

let i = 1;

form1.onsubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(`user ${i++}`, JSON.stringify({name: name.value, age: age.value}));
    name.value = '';
    age.value = '';
}







// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form2 = document.createElement('form');
document.body.append(form2);

form2.style.marginTop = '20px';

let model = document.createElement('input');
let type = document.createElement('input');
let volume = document.createElement('input');
let submit2 = document.createElement('input');

model.setAttribute('placeholder', 'Enter model...');
type.setAttribute('placeholder', 'Enter type...');
volume.setAttribute('placeholder', 'Enter engine volume...');
submit2.setAttribute('type', 'submit');

form2.append(model, type, volume, submit2);

let automobiles = [];

form2.onsubmit = (e) => {
    e.preventDefault();
    automobiles.push({model: model.value, type: type.value, volume: volume.value});
    localStorage.removeItem('cars')
    localStorage.setItem(`cars`, JSON.stringify(automobiles));
    model.value = '';
    type.value = '';
    volume.value = '';
}


