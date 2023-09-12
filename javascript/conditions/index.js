import { getNextAge } from './age.js';
const input = document.querySelector('#input');
const output = document.querySelector('#inc_age');

input.addEventListener('input', (event) => {
  output.textContent = getNextAge(event.target.value);
});
