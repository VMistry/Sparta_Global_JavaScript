//Writting basic function
var result = 5 + 10;
var result2 = 1 + 2;

console.log(result);
//Declaring the function

//Named functionr
function addNumbers(){
  ///function is the declaration///addNumber is the name/// () is the parentheses and inside it is the parameter///
  var function_result = 5 + 10;
  console.log(function_result);
}

// Call the function
addNumbers();

//Unnamed function
var addNumber2 = function () {
  var function_result2 = 5 + 10;
  console.log(function_result2);
}

// Call the function
addNumber2();

// Hoisting
makeNoise();

function makeNoise(){
  alert("How annoying - we will never use these in our game");


}

function addNumbersTogether(number1, number2){
  var result = number1 + number2;
  console.log(result);
}

addNumbersTogether(1, 5);
addNumbersTogether(4, 6);


function addNumberWithReturn(number1, number2){
  var result = number1 + number2;
  return result;
}

var answer1 = addNumberWithReturn(1,3);

debugger;
