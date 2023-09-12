export function age(values) {
  // console.log(values.length);
  return values.filter(function (value) {
    return value >= 18;
  }).length;
}
