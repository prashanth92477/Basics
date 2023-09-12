import { getButtonMesures } from './measure.js';

const primary = document.querySelector('#primary');
const secondary = document.querySelector('#secondary');

const primaryvalue = getComputedStyle(primary).width;
const secondaryvalue = getComputedStyle(secondary).width;

console.log(getButtonMesures(primaryvalue));
console.log(getButtonMesures(secondaryvalue));
