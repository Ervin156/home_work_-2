
const inputNames = document.querySelector('#input');
const cleanList = document.querySelector('#clean');
const area = document.querySelector('#names');
let block = document.querySelector('#users');

inputNames.onclick = function () {
    html = ' ';
    html += `<li>${area.value}</li>`;
    block.innerHTML += html;
};
cleanList.onclick = function () {
    block.innerHTML = '';
    area.value = '';
};



