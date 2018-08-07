# spartaglobal_javascript
* Brendan Eich 1995 Built Js over a drunk weekend, 
* // are comments in JS
```javascript
var a = 5;
```
## Debugging starter code
* Folder for some code that is faulty - we're going to use it to debug and use the tools available to us such as stepping into stepping over and breakpoints
* Insert breakpoints at code points to step over to work out problems. 

## Data types
### Strings

Are basic data type to store paragraphs, single characters.
```javascript
// different data types:
// strings:
console.log('-----STRINGS-----');
var myString = "Hello";

console.log(myString + ' Everyone');

console.log(myString.length);

console.log(myString.indexOf('e'));

console.log(myString.substr(2,4));
```
```javascript
// numbers:
console.log('-----NUMBERS-----');
var myNumber = 5;

console.log(myNumber + 3);

console.log(myNumber - 2);

console.log(myNumber * 4);

console.log(myNumber / 5);
// increment
myNumber++;
console.log(myNumber);

// methods
// is it a finite number
console.log(isFinite(myNumber));
```
```javascript
// arrays
console.log('-----ARRAYS-----');

var myArray = [5,6,7,"a","b"];
//uses
// properties
// how many items in the array
console.log(myArray.length);

// operators
// set a value in a specific position

myArray[2] = 8;
console.log(myArray);
// join two arrays
console.log(myArray + ["more" , "stuff"]);

// methods
// add another value to the end
myArray.push("I'm at the end");
console.log(myArray);
// remove and return the last element from an array
console.log(myArray.pop());
console.log(myArray);
// reverse an array
myArray.reverse();
console.log(myArray);
```
```javascript
// type coercion
console.log('-----TYPE COERCION-----');
// converts both to string then adds together
var myString = '5';
var myNumber = 3;
console.log(myString + myNumber);

var myString = "5";
var myDecimalString = "2.5";
var myNumber = 3;

// change string to integer
console.log( parseInt(myString) + myNumber );

// change string to decimal ( float )
console.log( parseFloat(myDecimalString) + myNumber );

// change decimal to integer ( remove the point )
console.log( parseInt(myDecimalString) + myNumber );

```
