import { textEclipse } from './helper.js';
const input = document.querySelector('#input');
const output = document.querySelector('#output');

input.addEventListener('input', (event) => {
  output.textContent = textEclipse(event.target.value);
});
