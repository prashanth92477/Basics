import { selectedCountry } from './country.js';
const countries = ['US', 'UK', 'INDIA', 'RUSSIA'];

const cntry_options = document.querySelector('#country');
console.log('cntry_options = ', cntry_options);
cntry_options.innerHTML = selectedCountry(countries);
console.log(selectedCountry(countries));
