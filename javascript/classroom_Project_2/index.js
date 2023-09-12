import {
  getNumberOfGrades,
  getSumGrades,
  averageGrades,
  getPassingGrades,
  getFailingGrades,
  getRaisedGrades,
} from './classroom.js';

const grades = [12, 19, 10, 4, 15, 9];
const input = document.querySelector('#input');
const number = document.querySelector('#number');
const sum = document.querySelector('#sum');
const average = document.querySelector('#average');
const passing = document.querySelector('#Passing');
const failing = document.querySelector('#Failing');
const Raised = document.querySelector('#Raised');

const btn = document.querySelector('#add');
btn.addEventListener('click', function (event) {
  // console.log('target', event.target.value);
  // console.log();

  if (input.value !== '') {
    console.log(Number.parseInt(input.value));
    grades.push(Number.parseInt(input.value));

    number.textContent = getNumberOfGrades(grades);
    sum.textContent = getSumGrades(grades);

    average.textContent = averageGrades(grades);

    passing.textContent = getPassingGrades(grades);
    failing.textContent = getPassingGrades(grades);

    Raised.textContent = getPassingGrades(grades);
  }

  // number.textContent = getNumberOfGrades(Number.parseInt(input.value));
});
