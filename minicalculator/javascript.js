var number1 = parseInt(prompt("Enter first number"));
var operator = prompt("Enter operation");
var number2 = parseInt(prompt("Enter second number"));
if(operator == "+"){
  console.log(number1 + number2);
}
else if(operator == "-"){
  console.log(number1 - number2);
}
else if(operator == "*"){
  console.log(number1 * number2);
}
else if(operator == "/"){
  console.log(number1 / number2);
}

else{
  console.log("Does not compute operator");

}
