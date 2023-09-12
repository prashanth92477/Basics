// import { getDescription } from './variation.js';
// const input = document.querySelector('#input');
// const output = document.querySelector('#output');

// input.addEventListener('input', (event) => {
//   output.textContent = getDescription(event.target.value);
// });
import {
  getNumberofCharacter,
  getFirstCharacter,
  getLastCharacter,
  getLowerCase,
  getUpperCase,
  getCapitalize,
} from './variation.js';

// const input = document.querySelector('#name-varation');
// console.log(input.value);
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const answer5 = document.querySelector('#answer5');
const answer6 = document.querySelector('#answer6');
const input = document.querySelector('#name-varation');
input.addEventListener('keyup', (event) => {
  console.log(event.target.value);
  const value = event.target.value;

  answer1.innerHTML = getNumberofCharacter(value);
  answer2.innerHTML = getFirstCharacter(value);
  answer3.innerHTML = getLastCharacter(value);
  answer4.innerHTML = getLowerCase(value);
  answer5.innerHTML = getUpperCase(value);
  answer6.innerHTML = getCapitalize(value);
});
