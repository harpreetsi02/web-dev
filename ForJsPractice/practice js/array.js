// let arr = [3, 7, 5];
// arr.push(6); // Add one or more elements to the ending of an array
// arr.unshift(4); // Add one or more elements to the beginning of an array
// arr.pop(); // Remove the last element from an array
// arr.shift(); // Remove the first element from an array
// console.log(arr.length); // Determine the size of various data types, primarily strings and arrays
// console.log(arr.slice(1,4)); // Extract a portion of an array or a string and return a new array
// console.log(arr.splice(1,3)); // change the content of an array by removing, replacing, or adding elements
// console.log(arr.indexOf(5)); // returns the position of the first occurrence
// console.log(arr);

// <---------- merge two or more arrays ----------->
// let arr1 = [1, 2, 8];
// console.log(arr.concat(arr1).sort());

// console.log(arr.reverse()); // convert reverse
// console.log(arr.sort());
// console.log(arr.map(x=> x*2)); // Array.prototype that creates a new array by calling a provided function on every element in the calling array
// console.log(arr.filter(x => x % 2 === 0)); // all elements from the original array that satisfy a given condition
// console.log(arr.reduce((a, b) => a + b)); // that executes a provided "reducer" callback function on each element of the array, resulting in a single output value
// console.log(arr.find(x => x > 5)); // method used to retrieve the value of the first element in an array that satisfies a provided testing function.
// console.log(arr.every(x => x % 2 === 0)); // method that tests whether all elements in an array pass a specific condition implemented by a provided callback function & answer gave ture or false
// console.log(arr.some(x => x % 2 === 0)); // method is used to determine whether at least one element in an array satisfies a condition provided by a callback function & answer gave ture or false
// arr.forEach(x => console.log(x));
// let arr = []

// function isEven(a){
//     let i = 2;
//     if(a % 2 === 0){
//         return "Even";
//     }

//     else{
//         return "Odd";
//     }
// }
// console.log(isEven(7));

// function isAge(age){
//     if(age >= 18){
//         return "Adult";
//     }

//     else if(age < 1){
//         return "Your not born";
//     }

//     else{
//         return "Minor"
//     }
// }

// console.log(isAge(19));
// console.log(isAge(18));
// console.log(isAge(17));
// console.log(isAge(0));

// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4]));
// console.log(sumArray([10, 20, 30]));

// for(let i = 1; i <= 10; i++){
//     console.log("harpreet");
// }

// function findMax(arr){
//     return Math.max(...arr);
// }

// console.log(findMax([1,2,3,4, 7,3,5,6,7,5,4,3]));    
// console.log(findMax([10,20,5,45,45,56,34,57,34,68,34,34,6,76,43,43,22])); 

// function findAverage(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum/arr.length;
// }
// console.log(findAverage([1, 2, 3, 4]));
// console.log(findAverage([10, 20, 30, 40])); 

// function countEvenOdd(arr){
//     let data = {Even: 0, Odd: 0};
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             data.Even += 1;
//         }
//         else{
//             data.Odd += 1;
//         }
//     }
//     return data;
// }
// console.log(countEvenOdd([1, 2, 3, 4, 5]));
// console.log(countEvenOdd([10, 15, 20, 25]));

// function countVowels(str){
//     let count = 0;
//     let vowels = "aeiou";

//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("hello"));   
// console.log(countVowels("javascript"));

// function countConsonants(str){
//     let count = 0;
//     let consonants = "bcdfghjklmnpqrstvwxyz";

//     for(let i = 0; i < str.length; i++){
//         if(consonants.includes(str[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countConsonants("javascript i am fine and your are not a good person")); 

// function isPalindrome(str){
//     let rev = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         rev += str[i];
//     }
//     return rev === str;
// }
// console.log(isPalindrome("madam"));  
// console.log(isPalindrome("racecar"));  
// console.log(isPalindrome("hello"));

// function factorial(n){
//     let result = 1;
//     for(let i = 1; i <= n; i++){
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));
// console.log(factorial(3));

// function isPrime(n) {
//     if (n <= 1) return "notPrime";

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return "notPrime";
//     }
//     return "Prime";
// }
// console.log(isPrime(7));
// console.log(isPrime(10));
// console.log(isPrime(1)); 

// function isPrime(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function printPrimes(n) {
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// printPrimes(10); // Output: 2, 3, 5, 7

// let greet = function(){
//     console.log("Hello world");
// }
// greet();

// let add = function(a, b){
//     console.log(a+b);
// }
// add(5,7);

// let reverse = function(str){
//     let rev = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         rev += str[i];
//     }
//     return rev;
// }
// console.log(reverse("hello"));

// let countEven = function(arr){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             count++;
//         }
//     }
//     return count
// }
// console.log(countEven([1,2,3,4,5,6])); // Output: 3

// let sumArray = function(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([1,2,3,4,5]));

// let countVowels = function(str){
//     let count = 0;
//     let vowels = "aeiou";
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("javascript"));
// console.log(countVowels("hello world")); 

// let checkEvenOdd = function(n){
//     return n % 2 === 0 ? "Even" : "Odd";
// }
// console.log(checkEvenOdd(10)) // Output: "Even"
// console.log(checkEvenOdd(7))  // Output: "Odd"

// let findMax = function(arr){
//     let max = Math.max(...arr);
//     return max;
// }
// console.log(findMax([1, 2, 3, 4])  )         // Output: 4
// console.log(findMax([10, 20, 5, 45, 56]) )   // Output: 56

// let factorial = function(n){
//     let sum = 1;
//     for(let i = 1; i <= n; i++){
//         sum *= i;
//     }
//     return sum;
// }
// console.log(factorial(5));

// let isPalindrome = function(str){
//     let rev = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         rev += str[i];
//     }
//     return rev === str ? "True" : "False";
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// let sortArray = function(arr){
//     return arr.sort();
// }

// console.log(sortArray([5, 2, 8, 1]));

// let square = (n) => n*n;
// console.log(square(6));

// let add = (a, b) => a+b;
// console.log(add(5,7));

// let toUpper = (str) => str.toUpperCase();
// console.log(toUpper("hello"));

// let firstElement = (arr) => arr[0];
// console.log(firstElement([10, 20, 30]));

// let checkNumber = (n) => n >= 1 ? "Positive" : n === 0 ? "Zero" : "Negative";
// console.log(checkNumber(5)); 
// console.log(checkNumber(-3)); 
// console.log(checkNumber(0)); 

// let lastChar = (str) => str[str.length - 1];
// console.log(lastChar("hello"));
// console.log(lastChar("world"));

// let isPrime = (n) => { for(let i = 2; i < Math.sqrt(n); i++){
//         return n % i === 0 ? "Not Prime" : "Prime";
//     }
// }
// console.log(isPrime(7));
// console.log(isPrime(10));

// let reverse = (str) => {
//     let rev = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         rev += str[i];
//     }
//     return rev;
// }

// console.log(reverse("hello"));

// let findMin = (arr) => Math.min(...arr);
// console.log(findMin([5, 2, 8, 1]));

// let factorial = (n) => {
//     let fact = 1;
//     for(let i = 1; i <= n; i++){
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(5));

// let isPalindrome = (str) => {
//     let rev = str.split("").reverse().join("");
//     return rev === str ? "True" : "False";
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// let filterEven = (arr) => {
//     for(let i = 2; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             arr[i];
//         }
//     }
//     return arr;
// }
// console.log(filterEven([1,2,3,4,5,6]));

// let countVowels1 = (str) => {
//     let count = 0;
//     let vowels = "aeiou";
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("javascript"));   // 3
// console.log(countVowels("hello world"));  // 3

// let findAverage = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum/arr.length;
// }
// console.log(findAverage([1,2,3,4]));

// let rev = (str) => str.split("").reverse().join("");
// console.log(rev("harpreet"));

// let allSquare = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         arr[i] ** 2;
//     }
//     return arr;
// }
// console.log(allSquare([1,2,3,4,5]));

// 1 question
// let double = (arr) => arr.map(num => num * 2);
// console.log(double([2,4,6,8]));

// 2 question
// let toUpper = (str) => str.map(arr => arr.toUpperCase());
// console.log(toUpper(["apple","banana","orange"]));

// 3 question
// let squareRoot = (arr) => arr.map(num => Math.sqrt(num));
// console.log(squareRoot([5,10,15]));

// let onlyOdd = (arr) => arr.filter(x => x % 2 !== 0);
// console.log(onlyOdd([1,2,3,4,5,6,7,8,9]));

// let strLength = (arr) => arr.map(str => str.length);
// console.log(strLength(["javascript", "is", "fun"]));

// let cube = (arr) => arr.map(num => num ** 3);
// console.log(cube([2,3,4,5]));

// let squarePlusOne = (arr) => arr.map(num => (num ** 2) + 1);
// console.log(squarePlusOne([1,2,3,4]));

// (function(){
//     console.log("hello kaise ho bhai mere");
// })();

// let add = (a, b) => a+b;
// let multiply = (a, b) => a*b;

// function calculate(num1, num2, callback){
//     return callback(num1, num2);
// }

// console.log(calculate(5, 3, add)); 
// console.log(calculate(5, 3, multiply)); 

// let greet = () => console.log("Welcome to JavaScript!");

// function greetUser(name, callback){
//     console.log("Hello " + name);
//     callback();
// }
// greetUser("harpreet", greet);

// let square = (n) => n.map(num => num ** 2);
// function processArray(arr, callback){
//     return callback(arr);
// }

// console.log(processArray([1,2,3,4], square)); 

// let add = (a,b) => a+b;
// let multiply = (a,b) => a*b;

// function calculate(num1, num2, callback){
//     return callback(num1, num2);
// }

// console.log(calculate(5, 3, add));
// console.log(calculate(5, 3, multiply));

// let isEven = (arr) => arr.filter(num => num % 2 === 0);
// let isOdd = (arr) => arr.filter(num => num % 2 !== 0);

// function customFilter(num, callback){
//     return callback(num);
// }

// console.log(customFilter([1,2,3,4,5], isEven));
// console.log(customFilter([1,2,3,4,5], isOdd));

// let double = (n) => n * 2;
// function repeatAction(times, value, callback){
//     // tumhe yaha logic likhna hai
//     for(let i = 1; i < times; i++){
//         value = callback(value);
//     }
//     return callback(value);
// }
// console.log(repeatAction(3, 2, double));

// let square = (n) => n.map(num => num ** 2);
// let double = (n) => n.map(num => num *2);

// function processArray(arr, callback){
//     return callback(arr);
// }

// console.log(processArray([1,2,3,4], square));
// console.log(processArray([1,2,3,4], double));


// let square = (n) => n ** 2;
// let double = (n) => n * 2;

// function processNumbers(arr, callback){
//     let even = arr.filter(num => num % 2 === 0);
//     return even.map(callback);
// }
// console.log(processNumbers([1,2,3,4,5,6], square));
// console.log(processNumbers([1,2,3,4,5,6], double));

// Callback functions
// let square = (n) => n * n; 
// let double = (n) => n * 2;    
// let isEven = (n) => n % 2 === 0; 
// function processData(arr, filterCallback, mapCallback) {
//     let filtered = arr.filter(filterCallback);
//     let transformed = filtered.map(mapCallback);
//     return transformed;
// }
// console.log(processData([1,2,3,4,5,6], isEven, square));  
// console.log(processData([1,2,3,4,5,6], isEven, double));  

// let isEven = (n) => n % 2 === 0; 
// let square = (n) => n * n; 
// let double = (n) => n * 2;    

// function processNumbersAdvanced(arr, filterCallback, mapCallback){
//     let result1 = arr.filter(filterCallback);
//     let result2 = result1.map(mapCallback);
//     let result3 = result2.reduce((a, b) => a+b);
//     return result3;
// }
// console.log(processNumbersAdvanced([1,2,3,4,5,6], isEven, square)); 
// console.log(processNumbersAdvanced([1,2,3,4,5,6], isEven, double));

// function getUser(callback){
//     setTimeout(() => {
//         console.log("User Fatched!");
//         callback({id: 1, name: "Harpreet"});
//     }, 1000);
// }

// function getProfile(user, callback){
//     setTimeout(() => {
//         console.log("Profile fatched for " + user.name);
//         callback({age: 19, city: "Delhi"});
//     }, 1000);
// }

// function getOrders(profile, callback){
//     setTimeout(() => {
//         console.log("Order fatched for " + profile.city);
//         callback(["Shoes", "T-shirt", "Watch"]);
//     }, 1000);
// }

// function calculateBill(order, callback){
//     setTimeout(() => {
//         console.log("Bill calculated for " + order.length + " items");
//         callback(order.length * 500);
//     }, 1000);
// }

// getUser((user) => {
//     getProfile(user, (profile) => {
//         getOrders(profile, (order) => {
//             calculateBill(order, (bill) => {
//                 console.log("final Bill: " + bill);
//             });
//         });
//     });
// });

// function getUser(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User fatched!");
//             resolve({id: 1, name: "Harpreet"});
//         }, 1000);
//     });
// }

// function getProfile(user){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Profile fatched " + user.name);
//             resolve({age: 19, city: "Delhi"});
//         }, 1000);
//     });
// }

// function getOrders(profile){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Order Conformed " + profile.city);
//             resolve(["t-shirt", "shoe", "watch"]);
//         }, 1000);
//     });
// }

// function calculateBill(order){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Bill calculated " + order.length + " items");
//             resolve(order.length * 500);
//         }, 1000);
//     });
// }

// async function main() {
//     try{
//         let user = await getUser();
//         let profile = await getProfile(user);
//         let order = await getOrders(profile);
//         let bill = await calculateBill(order);
//         console.log("Total Bill is: " + bill);
//     }
//     catch(err){
//         console.log("Error " + err);
//     }
// }

// main();
