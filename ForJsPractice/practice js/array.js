let arr = [3, 7, 5];
arr.push(6); // Add one or more elements to the ending of an array
arr.unshift(4); // Add one or more elements to the beginning of an array
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
console.log(arr.sort());
// console.log(arr.map(x=> x*2)); // Array.prototype that creates a new array by calling a provided function on every element in the calling array
// console.log(arr.filter(x => x % 2 === 0)); // all elements from the original array that satisfy a given condition
// console.log(arr.reduce((a, b) => a + b)); // that executes a provided "reducer" callback function on each element of the array, resulting in a single output value
// console.log(arr.find(x => x > 5)); // method used to retrieve the value of the first element in an array that satisfies a provided testing function.
// console.log(arr.every(x => x % 2 === 0)); // method that tests whether all elements in an array pass a specific condition implemented by a provided callback function & answer gave ture or false
// console.log(arr.some(x => x % 2 === 0)); // method is used to determine whether at least one element in an array satisfies a condition provided by a callback function & answer gave ture or false
// arr.forEach(x => console.log(x));