import { age } from './city.js';
const country = document.querySelector('#country');
const amsterdam = [
  10, 14, 75, 52, 75, 15, 15, 13, 34, 62, 46, 64, 23, 72, 73, 82, 74, 23, 46,
  43, 62, 14, 36, 23,
];
const berlin = [
  15, 72, 45, 73, 72, 83, 36, 67, 26, 36, 25, 63, 22, 23, 52, 52, 25, 18,
];
const voter = document.querySelector('#voters');
const cntry = document.querySelector('#cntry');

country.addEventListener('change', function () {
  // console.log('selected', country.value.toLowerCase());

  let option = country.value.toLowerCase();
  // console.log('options', option);
  if (!option) {
    alert('Please select');
  }
  switch (option) {
    case 'berlin':
      // console.log('berlin', option);
      cntry.textContent =
        option[0].toUpperCase() + option.substring(1, option.length);
      voter.textContent = age(berlin);
      // console.log(age(berlin));
      break;
    case 'amsterdam':
      // console.log('amsterdam', option);
      // console.log(age(amsterdam));
      cntry.textContent =
        option[0].toUpperCase() + option.substring(1, option.length);
      voter.textContent = age(amsterdam);
      break;
    default:
      console.log('select a value');
      break;
  }
});
