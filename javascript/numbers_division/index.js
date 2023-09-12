import { getDivision } from './numbers.js';
const input = document.querySelector('#input');
const output = document.querySelector('#output_division');

input.addEventListener('input', (event) => {
  output.textContent = getDivision(event.target.value);
});
