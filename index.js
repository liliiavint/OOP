import { Galunes } from "./js/Galunes.js";

const listDOM = document.getElementById('list');
const formDOM = document.forms[0];
const inputDOM = document.getElementById('task');

const localStorageKey = 'tasks';
//const localTasks = localStorage.getItem(localStorageKey);
const taskList = [];

let HTML = '';

for (const item of taskList) {
    HTML += `<li>${item}</li>`;
}

listDOM.innerHTML = HTML;

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    const text = inputDOM.value;
    const word = new Galunes(text);
    const changeWord = word.pirma();

    listDOM.insertAdjacentHTML(
        'beforeend',
        `<li>${text} - ${changeWord}</li>` 

    );


    localStorage.setItem(localStorageKey, JSON.stringify(taskList));

});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});

