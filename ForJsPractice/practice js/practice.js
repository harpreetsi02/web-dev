// let num = prompt("Check the number: ");
// if (num > 0) {
//     console.log("Positive");
// } else {
//     console.log("Negative");
// }

// let num = prompt("Check the number odd or even: ");
// if (num % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// let age = prompt("Enter your age: ");
// if (age >= 18){
//     console.log("You're Eligible");
// }
// else{
//     console.log("Not Eligible");
// }

// let num1 = prompt("Enter num1 the value: ");
// let num2 = prompt("Enter num2 the value: ");
// if (num1 > num2){
//     console.log("num1: " + num1 + ", Number is greatest");
// }
// else if(num1 === num2){
//     console.log("Both numbers are equal");
// }
// else{
//     console.log("num2: " + num2 + ", Number is greatest");
// }

// let alpa = prompt("Enter alpabet");
// if (['a','e','i','o','u'].includes(alpa)) {
//     console.log("This is Vowel");
// } else {
//     console.log("This is consonant");
// }

// let year = prompt("Enter year");
// if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0)
//     console.log(year + ", This is a leap year.");
// else console.log(year + ", This is not a leap year.");

// let word = "JavaScript";
// if (word[0] === word[0].toUpperCase()) console.log("Starts with uppercase");
// else console.log("Doesn't start with uppercase");

// let user = "admin", password = "12345";
// if (user === "admin" && password === "1234") console.log("Login in successful");
// else console.log("wrong information");

// let units = 101, bill = 0;
// if (units <= 50) bill = units * 3;
// else if (units <= 100) bill = 50*3 + (units-50)*5;
// else bill = 50*3 + 50*5 + (units-100)*8;
// console.log("Bill = " + bill);

// let str = "ertytre";
// if (str === str.split('').reverse().join('')) console.log("Palindrome");
// else console.log("Not Palindrome");


// let number = 153, sum = 0, tempNum = number;
// while (tempNum > 0) {
//   let digit = tempNum % 10;
//   sum += digit**3;
//   tempNum = Math.floor(tempNum/10);
// }
// if (sum === number) console.log("Armstrong");
// else console.log("Not Armstrong");

// let num6 = 137, isPrime = true;
// if (num6 < 2) isPrime = false;
// else {
//   for (let i=2; i<=Math.sqrt(num6); i++) {
//     if (num6 % i === 0) { isPrime = false; break; }
//   }
// }
// if (isPrime) console.log("Prime number");
// else console.log("Not prime");

// let ageT = 59;
// if (ageT < 12) console.log("Child ticket: $5");
// else if (ageT < 60) console.log("Adult ticket: $10");
// else console.log("Senior ticket: $7");


// let str2 = "RaceCar".toLowerCase();
// if (str2 === str2.split('').reverse().join('')) console.log("Palindrome");
// else console.log("Not Palindrome");

// let n1 = 11;
// console.log(n1 % 2 === 0 ? "Even" : "Odd");

// let day = 2;
// switch(day) {
//   case 1: console.log("Monday"); break;
//   case 2: console.log("Tuesday"); break;
//   case 3: console.log("Wednesday"); break;
//   case 4: console.log("Thursday"); break;
//   case 5: console.log("Friday"); break;
//   case 6: console.log("Saturday"); break;
//   case 7: console.log("Sunday"); break;
//   default: console.log("Invalid day");
// }

// let action = prompt("Enter the what you do: ");
// let amount = Number(prompt("Enter amount"));
// let balance = 5000;
// switch (action) {
//     case "balance": console.log("Your bank balance: " + balance); break;
//     case "withdraw": console.log("Your bank balance: ", balance-amount); break;
//     case "deposite": console.log("Your bank balance: ", balance+amount); break;
//     default: console.log("Invailid Action"); break;
// }


// <--------- For Loops -------->

// let n = 10;
// for (let i = 1; i <= n; i += 2) {
//     console.log(i);
    
// }

// let n = 10;
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//     sum += i; 
// }
// console.log("Sum: " + sum);

// let n = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} * ${i} = ${n*i}`);
// }

// let n = 5;
// let fact = 1;
// for(let i = 1; i <= n; i++){
//     fact *= i;
// }
// console.log("Factorial = " + fact);


// let n = 10;
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     console.log(`${i}³ = ${i * i * i}`);
// }

// let num = 5;
// let limit = 10;
// for (let i = 1; i <= limit; i++) {
//     console.log(num * i);
// }



// let num = "1976";
// for(let i = 0; i <= num.length; i++){
//     console.log(num[i]);
// }

// let str = "HarpreetSingh";
// let rev = "";
// for(let i = str.length-1; i >= 0; i--){
//     rev += str[i];
// }
// console.log("reverse: " + rev);

// let n = 10;
// for(let i = 1; i <= n; i++){
//     console.log(i);
// }


// <--------- For While Loops -------->

// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// let i = true;
// while(i){
//     console.log(i);
// }

// let n = 2;
// while(n <= 20){
//     console.log(n);
//     n += 2;
// }

// let n = 5;
// let i = 1;
// while(i <= 10){
//     i++;
// }
// console.log(n * i);

// let i = 2, sum = 0;
// while(i <= 10){
//     sum += i;
//     i += 2;
// }
// console.log(sum);

// let i = 1, fact = 1, n = 5;
// while(i <= n){
//     fact *= i;
//     i++;
// }
// console.log(fact);

// let i = 1, product = 1;
// while(i <= 5){
//     product *= i;
//     i++;
// }
// console.log(product);

// let num = 12345432, rev = 0;
// while (num > 0){
//     rev = rev * 10 + (num % 10);
//     num = Math.floor(num/10);
// }
// console.log(rev);

// let num = 12349465656, count = 0;
// while (num > 0){
//     count++;
//     num = Math.floor(num/10);
// }
// console.log(count);

// let num = 65674, sum = 0;
// while(num > 0){
//     sum += num % 10;
//     num = Math.floor(num/10);
// }
// console.log(sum);

// let num = 264, con = 1;
// while(num > 0){
//     con *= num % 10;
//     num = Math.floor(num/10);
// }
// console.log(con);

// let num = 12121, temp = num, con = 0;
// while(temp > 0){
//     con = con * 10 + (temp % 10);
//     temp = Math.floor(temp/10);
// }
// console.log(num === con ? "Palidrome" : "Not Palidrome");

// let num = 1, str = "";
// while(num <= 5){
//     str += "*";
//     num++;
// }
// console.log(str);

// let i = 1;
// while(i <= 4){
//     let j = 1, str = "";
//     while(j <= 5){
//         str += "* ";
//         j++;
//     }
//     console.log(str);
//     i++;
// }

// let i = 1;
// while(i <= 5){
//     let j = 1, str = "";
//     while(j <= i){
//         str += "* ";
//         j++;
//     }
//     console.log(str);
//     i++;
// }

// let i = 1, val = 2;
// while(i <= 10){
//     console.log(val);
//     val *= 2;
//     i++;
// }

// let a = 0, b = 1, count = 1;
// while(count <= 10){
//     console.log(a);
//     let temp = a + b;
//     a = b;
//     b = temp;
//     count++;
// }

// let i = 1, n = 7;
// while(i <= 10){
//     console.log(`${n} * ${i} = ${n*i} `)
//     i++;
// }

// let i = 1;
// while(i <= 10){
//     console.log(`${i} = ${i*i*i}`);
//     i++;
// }

// let i = 2, num = 22, prime = true;
// while(i <= Math.sqrt(num)){
//     if(num % i === 0) {prime = false; break;}
//     i++;
// }
// console.log(prime ? "prime" : "not prime");

// let n = 2;
// while(n <= 200){
//     let i = 2, prime = true;
//     while(i <= Math.sqrt(n)){
//         if (n % i === 0) {prime = false; break;}
//         i++
//     }
//     if (prime) console.log(n);
//     n++;
// }

// let n = 153, sum = 0, temp = n;
// while(temp > 0){
//     let digit = temp % 10;
//     sum += digit ** 3;
//     temp = Math.floor(temp/10);
// }
// console.log(n === sum ? "Armstrong" : "Not armstrong");

// let num = 1;
// while(num <= 500){
//     let sum = 0, temp = num;
//     while(temp > 0){
//         let digit = temp % 10;
//         sum += digit ** 3;
//         temp = Math.floor(temp/10);
//     }
//     if (num === sum) console.log(num);
//     num++
// }

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while(i === 10)

// let i = 1;
// while(i <= 100){
//     if(i % 3 === 0 && i % 19 === 0) {
//         console.log(i);
//         i++;
//     } else{
//         console.log("Nothing");
//         break;
//     }
// }

// let arr = [10, 20, 30, 40];
// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }

// let arr = [10, 20, 30, 40, 50], i = 0, sum = 0;
// while(i < arr.length){
//     sum += arr[i];
//     i++;
// }
// console.log(sum);

// let arr = [23,43,54,23, 56,34,76,98,87,67], i = 1, max = arr[0];
// while(i < arr.length){
//     if(arr[i] > max) max = arr[i];
//     i++;
// }
// console.log(max);

let arr = [1,2,3,4,5], i = arr.length-1;
while(i >= 0){
    console.log(arr[i]);
    i--;
}