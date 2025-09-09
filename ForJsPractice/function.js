// function greet() {
//     console.log("Hello World!")
// }
// greet();

// Function with parameters
// function greet(name){
//     console.log("Hello... " + name)
// }
// greet("harpreet");

// function returning value
// function add(a, b){
//     console.log(a + b);
// }
// add(3, 5);

// const square = function(x){
//     return x*x;
// }
// console.log(square(9));

// const multiply = (a, b) => (a*b);
// console.log(multiply(7,8));

// function greet(name = "Guest"){
//     console.log("Hello, " + name);
// }
// greet("harpreet singh");

// asking this question
// function sum(...number){
//     return number.reduce((a,b) => (a+b),0);
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));

// (function(){
//     console.log("This is run immediately");
// })();

// function factorial(n){
//     if(n === 0) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

// function revstr(str){
//     return str.split("").reverse().join("");
// }
// console.log(revstr("hello"));

// function findmax(arr){
//     return Math.max(...arr);
// }
// console.log(findmax([4,6,5,3,2,7,8,5,3,2]));

// function findmin(arr){
//     return Math.min(...arr);
// }
// console.log(findmin([8,7,9,65,98,65,43,5]));

// function isPrime(n){
//     if(n < 2) return false;
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i === 0) return "This is not a Prime Number: " + n;
//     }
//     return "This is a Prime Number: " + n;
// }
// console.log(isPrime(8));

// setTimeout(function() {
//   console.log("2 second baad print hua!");
// }, 2000);

// (function() {
//   console.log("IIFE chala!");
// })();

// function sayHello(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// sayHello("Bhai", function() {
//   console.log("Callback executed!");
// });


// <---------- Arrows functions ----------> //
// const add = (a, b) => a + b;
// console.log(add(4,5));

// const square = x => x*x;
// console.log(square(9));

// let num;
// const isEven = num => num % 2 === 0 ? "Even" : "Odd";
// console.log(isEven(7));

// const max = (a, b) => a > b ? a : b;
// console.log(max(100, 20));

// const fact = n => n === 0 ? 1 : (n * fact(n - 1));
// console.log(fact(7));

// <---------- callback function ----------> //

