
var inputNames = document.querySelector('#input');
var cleanList = document.querySelector('#clean');
var area = document.querySelector('#names');
var block = document.querySelector('#users');

inputNames.onclick = function () {

    html = ' ';
    html += `<li>${area.value}</li>`;
    block.innerHTML += html;
}
cleanList.onclick = function () {
    block = document.querySelector('#users');
    block.innerHTML = '';
    area.value = '';
}



