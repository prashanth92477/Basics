export function selectedCountry(countries) {
  let option = '<option value="">Select Country</option>';
  countries.forEach(function (country) {
    // console.log('options = ', option);
    console.log('country = ', country);
    option += `<option value="${country.toLowerCase()}">${country}</option>`;
  });
  return option;
}
