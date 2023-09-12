import { renderTableRow } from './nutrition.js';
// const input = document.querySelector('#input');
// const output = document.querySelector('#output');

// input.addEventListener('input', (event) => {
//   output.textContent = getDescription(event.target.value);
// });
// cc;
const htmlForCarbs = renderTableRow('Carbs', '17g');
const htmlForProtein = renderTableRow('Protien', '19g');
const htmlForFat = renderTableRow('Fat', '5g');
const tbody = document.querySelector('#nutrition-table tbody');
tbody.insertAdjacentHTML('beforeend', htmlForCarbs);
tbody.insertAdjacentHTML('beforeend', htmlForProtein);
tbody.insertAdjacentHTML('beforeend', htmlForFat);
