//challenge 1
const peoples = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'poe',
    email: 'jane@example.com',
    phone: '222-2222-222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@example.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'sara@example.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@example.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const ul = document.querySelector('#userage');
var li = document.createElement('li');
function filteruserswithage(value) {
  // li.appendChild(document.createTextNode('Four'));
  // ul.appendChild(li);
  // return value >= 10;
  // console.log(value);
  if (value.age <= 25) {
    // return {name: `${value.firstName} ${value.lastName}`,}
    // console.log({
    //   name: `${value.firstName} ${value.lastName}`,
    //   email: `${value.email}`,
    // });
    return {
      name: `${value.firstName} ${value.lastName}`,
      email: `${value.email}`,
    };
  }
}

// console.log(peoples.filter(filteruserswithage));
peoples.filter(filteruserswithage).forEach((info, index) => {
  console.log('info = ', info, 'index =', index);
  li.appendChild(document.createTextNode(JSON.stringify(info)));
  ul.appendChild(li);
}); //
// peoples.filter((people) => {
//   console.log(people);
//   if (people.age <= 25) {
//   }
// });
// alert('Helo');
// function calculator(num, num2, operator) {
//   switch (operator) {
//     case '+':
//       return num + num2;
//     // break;
//     case '-':
//       return num - num2;
//     case '/':
//       return num / num2;
//     case '%':
//       return num % num2;
//     default:
//       return 'Invalid Operator';
//   }
// }
// console.log(calculator(10, 2, '%'));

// challenge 2
const numbers = [2, -30, 50, 20, -12, 9, 7];
console.log('Sum of the Number = ' + addPostiveNumber(numbers));

function addPostiveNumber(numbers) {
  let sum = 0;
  // numbers.forEach(function (number) {
  numbers.forEach((number) => (sum = sum + (number > 0)));
  //   // if (number > 0) sum += number;
  //   // number > 0 ? (sum += number) : (sum = 0); // observation here if you set sum to zero in else it reser the
  //   // sum += number > 0;
  // });
  return sum;
}

// challenge 3
const wordss = ['coder', 'programmer', 'developer'];

// function Captalize(words) {
//   words.forEach(function (word) {
//     console.log(word[0].toUpperCase() + word.substring(1, word.length - 1));
//     // console.log('helo');
//   });
// }
function Captalize(words) {
  // console.log(
  //   words.map(
  //     (word) => word[0].toUpperCase() + word.substring(1, word.length - 1)
  //   )

  // );
  // return (word) => word[0].toUpperCase() + word.substring(1, word.length - 1);

  return words.map(
    (word) => word[0].toUpperCase() + word.substring(1, word.length)
  );
}
console.log(Captalize(wordss));
