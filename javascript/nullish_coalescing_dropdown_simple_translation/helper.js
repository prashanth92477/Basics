//import { language, translations } from './translation.js';

export function getLanguages(languages) {
  console.log(languages);
  let options = `<option value="volvo">Select Value</option>`;
  languages.forEach((lang) => {
    options += `<option value=${lang.toLowerCase()}>${lang}</option>`;
  });
  return options;
}

export function translateLanguage(value, translang) {
  translang.welcome.default = 'Welcome';
  // console.log('value', value);
  // console.log('translang', translang);
  //console.log('translang', translang.welcome[value]);
  return { [value]: translang.welcome[value] ?? translang.welcome.default };
}
