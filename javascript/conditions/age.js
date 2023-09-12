export function getNextAge(value) {
  // console.log(typeof value);
  if (value !== '') {
    // console.log(typeof Number.parseInt(value, 10) + 1);
    // console.log(value);
    console.log('test = ', value);
    return Number.parseInt(value, 10) + 1;
  }
  return 0;
}

// export function getDescription(text) {
//   // console.log(text);
//   console.log(text);
//   // return text.substring(0, 10);
//   return text.substring(0, 10) + '...';
// }
