alert("Its working");

//Control Flow

//if the money in pocket is less than 10 pounds: go home
//Otherwise have a drink


var money_in_pocket = parseFloat(prompt("How much money do you have?"));
var drink_drunk = parseFloat(prompt("How many have you had already?"));
var price_of_crisp = parseFloat(prompt("How much are those crisp?"))
if(money_in_pocket > 10 && drink_drunk < 3){
  console.log("Another drink please!")
}
else if(money_in_pocket > 5 || price_of_crisp == 0){
  console.log("Just crisps then");
}
else{
  console.log("I'm off Home")

}

// 10 > 5 = true
//
// false == !true
//
// 1 < 3 = true
//
// 1 != 1 = false
//
// 10 <= 10 = true
//
// 10 >= 10 = true
//
// "a" == "b" = true

// "z" < "c" == true
//
// true && true == true
//
// true && false == false
//
// 5 > 10 && 3 < 5 == false
//
// true || true == true
//
// false || false == true
//
// false || !true == false


var name = "tim";

if(name == "bob"){
  console.log("Hi Bob");
}

else if(name == "tim"){
  console.log("Hi Tim");

}

else if(name == "steve"){
  console.log("Hi Steven");

}

//switch version

switch(name){
  case "bob":
    console.log("Hi Bob");
    break;
  case "tim":
    console.log("Hi Tim");
    break;
  case "steven":
    console.log("Hi Steven");
    break;
  default:
    console.log("Hi default person");
}
