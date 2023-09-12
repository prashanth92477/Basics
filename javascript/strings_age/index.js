import { getNextAge } from './age.js';
let user_age = document.querySelector('#age');
let next_age = document.querySelector('#next_age');
// console.log(typeof age);
// console.log('user_age = ', user_age);
// age.textContent = userage(user_age);
user_age.addEventListener('keyup', () => {
  next_age.textContent = getNextAge(user_age.value);
  // console.log(event.target.value);
  //   if (event.target.value !== null) {
  //   //   // console.log('notnull', event.target.value);
  //   //   // return event.target.value;
  //   //   return (age_ouput = userage(event.target.value));
  //   // }
  //   // // console.log('null', event.target.value);
  //   // return (age_ouput = userage(event.target.value));
});
