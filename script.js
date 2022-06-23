// read numbers in the program
const num1 = parseFloat(prompt("Enter num1: "));
const num2 = parseFloat(prompt("Enter num2: "));

// read operator
const operator = prompt("Enter operator (+, -, /, *)");
let result = 0;
if (isNaN(num1) || isNaN(num2)) {
  alert("Wrong Input! Refresh the page and input a number");
} else {
  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "/") {
    result = num1 / num2;
  } else if (operator == "*") {
    result = num1 * num2;
  }
  document.write(num1 + operator + num2 + " = " + result);
}
