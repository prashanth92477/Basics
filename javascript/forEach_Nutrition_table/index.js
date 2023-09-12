import { nutritionTable } from './nutrition.js';
const tbody = document.querySelector('#tbody');
const data = [
  ['Carbs', '17g'],
  ['Protein', '19g'],
  ['Fat', '5g'],
];
console.log(nutritionTable(data));
tbody.innerHTML = nutritionTable(data);
console.log(nutritionTable(data));
