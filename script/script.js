let num1 = +prompt('Please, enter first number!');
let num2 = +prompt('And now enter second number!');
let sumResult = num1 + num2;
let diffResult = num1 - num2;
let multResult = num1 * num2;
let divResult = num1 / num2;
let calculateTotal = `Calculations are finished!
Sum: ${num1} + ${num2} = ${sumResult}
Diff: ${num1} - ${num2} = ${diffResult}
Mult: ${num1} * ${num2} = ${multResult}
Div: ${num1} / ${num2} = ${divResult}`;

alert(calculateTotal);
console.log(calculateTotal);