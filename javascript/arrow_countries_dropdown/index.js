import { selectCountry } from './countries.js';

const listofcountry = ['Netherlands', 'Japan', 'Mongolia'];
const html = selectCountry(listofcountry);
let cntry = document.querySelector('#country');
cntry.innerHTML = html;
