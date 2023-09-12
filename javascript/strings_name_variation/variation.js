// export function getDescription(text) {
//   // console.log(text);
//   console.log(text);
//   // return text.substring(0, 10);
//   return text.substring(0, 10) + '...';
// }
export function getNumberofCharacter(text) {
  // return text.length;
  console.log(text.length);
  return text.length;
}

export function getFirstCharacter(text) {
  return text.charAt(0);
  // return text[0];
}

export function getLastCharacter(text) {
  return text.charAt(text.length - 1);
}
export function getLowerCase(text) {
  return text.toLowerCase();
}
export function getUpperCase(text) {
  return text.toUpperCase();
}

export function getCapitalize(text) {
  return text[0].toUpperCase() + text.substring(1, text.length);
}
