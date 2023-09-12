// export function selectCountry(countries) {
//   let options = '<option value="">Please select</option>';
//   console.log(countries);
//   countries.forEach((country) => {
//     options += `<option value=${country.toLowerCase()}>${country}</option>`;
//   });
//   return options;
// }
export const selectCountry = (countries) => {
  let options = '<option value="">Please select</option>';
  console.log(options);
  countries.forEach((country) => {
    // console.log('element', element);
    options += `<option value=${country.toLowerCase()}>${country}</option>`;
  });
  return options;
};
