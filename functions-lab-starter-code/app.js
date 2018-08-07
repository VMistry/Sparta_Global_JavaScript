// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (number1, number2) {
  var result = number1 * number2;
  return result;
}

// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree(number1, number2, number3){
  var result = number1 + number2 + number3;
  return result;

}
// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber(number1, number2){
  if(number1 < number2)
    return number1;
  else
    return number2;
}
// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree(number1, number2, number3){
  if(number1 > number2 && number1 > number3)
    return number1;
  else if(number2 > number1 && number2 > number3)
    return number2;
  else
    return number3;
}

// 5. Write a function called 'reverseString' that returns the reverse a string
function reverseString(stringer){
  // Step 1. Use the split() method to return a new array
    var splitString = stringer.split(""); // var splitString = "hello".split("");

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter
function disemvowel(stringer){
  var splitString = stringer.split("");

  for (var i = 0; i < splitString.length; i++) {
    if(splitString[i] == "a" || splitString[i] == "e" || splitString[i] == "i" || splitString[i] == "o" || splitString[i] == "u"){
        splitString[i] = "";
    }

  }

  var result = splitString.join("");
  console.log(result);
  return result;
}
// 7. Write a function called 'removeOdd' that removes all ODD number from an array
function removeOdd(array){
  var rv = [];
  for (var i = 0; i < array.length; i++) {
        if (! (array[i] % 2)) {
            rv.push(array[i]);
        }
    }
  return rv;
}

// 8. Write a function called 'removeEven' that removes all EVEN number from an array

function removeEven(array){
  var rv = [];
  for (var i = 0; i < array.length; i++) {
        if (array[i] % 2) {
            rv.push(array[i]);
        }
    }
  return rv;
}

// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
function longestString(array){
  var result = "";

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > result.length)
      result = array[i]
  }

  return result;
}

// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]

function allElementsExceptFirstThree(array){
  var rv = [];
  for (var i = 2; i < array.length; i++) {
        if (! (array[i] % 2)) {
            rv.push(array[i]);
        }
    }
  return rv;
}

//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
function convertArrayToAnObject(array){
  var rv = {};
  if((array.length % 2) == 0){
    for (var i = 0; i < array.length; i++) {
      rv[array[i]] = array[i + 1];
      i++;
    }
  }
  return rv;
}


// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules

// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function fizzBuzz(number){
  var result = number;
  if((number % 5) == 0 && (number % 3) == 0){
    result = "FizzBuzz"
  }
  else if((number % 5) == 0 && (number % 3) != 0){
    result = "Buzz"
  }
  else if((number % 5) != 0 && (number % 3) == 0){
    result = "Fizz"
  }

  return result;
}//Fizzbuzz is something which can divide in to 3 and 5| divisible by 5 is fizz and divisible by 3 is buzz.
