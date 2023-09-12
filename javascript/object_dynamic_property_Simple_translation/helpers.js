export function Language(languages) {
  //console.log(languages);
  let options = `<option>Please Select</option>`;
  languages.forEach((language) => {
    options += `<option value="${language.toLowerCase()}">${language}</option>`;
  });
  return options;
}

export function translations(options) {
  const translate = {
    welcome: {
      dutch: 'Welkom',
      french: 'Bienvenue',
      english: 'Welcome',
    },
  };
  console.log('options');
  return translate.welcome[options];
  //console.log(translate.welcome[options]);
}
