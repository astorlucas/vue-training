//Esto es para agregar elementos a una lista solo usando js
const botonElem = document.querySelector('button');
const inputElem = document.querySelector('input');
const listaElem = document.querySelector('ul');

botonElem.addEventListener('click', () => {
    const valor = inputElem.value;
    const listaItem = document.createElement('li');
    listaItem.textContent = valor;
    listaElem.appendChild(listaItem);
})