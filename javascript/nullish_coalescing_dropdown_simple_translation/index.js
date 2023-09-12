import { language, translations } from './translation.js';
import { getLanguages, translateLanguage } from './helper.js';

const lang = document.querySelector('#lang');
const output = document.querySelector('#output');
const output_label = document.querySelector('#output_label');
const output_ans = document.querySelector('#output_ans');

lang.innerHTML = getLanguages(language);

// getLanguages(language);

// adding eventlister on the element to select value from the dropdown

lang.addEventListener('change', () => {
  //console.log(lang.value);

  const trans_lang = translateLanguage(lang.value, translations);
  const [language, translation] = Object.entries(trans_lang)[0];
  //console.log(Object.entries(trans_lang)[0]);

  console.log('language', language);
  console.log('translation', translation);

  output_label.textContent =
    language.charAt(0).toUpperCase() + language.slice(1);
  //console.log(language.charAt(0).toUpperCase() + language.slice(1));
  //console.log('language', typeof language);

  output_ans.textContent = translation;
  //console.log(Object.keys(trans_lang)[0]);
  //console.log(trans_lang);
  // const key = Object.keys(trans_lang)[0];
  //console.log(Object.keys(key));
  // console.log(Object.keys(trans_lang).[0]);

  // console.log(trans_lang);
  // console.log(trans_lang.value);
  // console.log(trans_lang[trans_lang.value]);
});
