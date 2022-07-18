// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3, passing 15 arguments should return the umber 15
//1
function howManyArgs() {
  return arguments.length;
}
console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
console.log(howManyArgs("better")); // -> 1

//2
const howManyArgsArrow = (...args) => args.length;
console.log(howManyArgsArrow()); // -> 0
console.log(howManyArgsArrow(1, false, "hello")); // -> 3
console.log(howManyArgsArrow("better")); // -> 1
