import { Nutrition } from './nutrition.js';

let html = '';
const carbs = { title: 'Carbs', value: 17 };
const protein = { title: 'Protein', value: 19 };
const fat = { title: 'Fat', value: 5 };

const tbody = document.querySelector('#tbody');
html += Nutrition(carbs);
html += Nutrition(protein);
html += Nutrition(fat);
tbody.insertAdjacentHTML('beforeend', html);
