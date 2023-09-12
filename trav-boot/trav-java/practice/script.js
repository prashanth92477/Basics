// alert('Helo');
function calculator(num, num2, operator) {
  switch (operator) {
    case '+':
      return num + num2;
    // break;
    case '-':
      return num - num2;
    case '/':
      return num / num2;
    case '%':
      return num % num2;
    default:
      return 'Invalid Operator';
  }
}
console.log(calculator(10, 2, '%'));
