import { Language, translations } from './helpers.js';
const languages = ['English', 'French', 'Dutch'];
//console.log(Language(languages));
const lang = document.querySelector('#language');
const out = document.querySelector('#output');
lang.innerHTML = Language(languages);
// user action on the selectoptions

lang.addEventListener('change', () => {
  //console.log(lang.value);
  out.textContent = translations(lang.value);
});
