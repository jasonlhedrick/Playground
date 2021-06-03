/*
Array.unshift() adds an element to the front of the array and
then returns the updated length of the array.
*/

const arr = [3, 2, 5, 6];

console.log(`arr before calling arr.unshift(10) : ${arr}`);
console.log(`The length of arr before calling arr.unshift(10) : ${arr.length}`);
console.log(`The returned value of arr.unshift(10) : ${arr.unshift(10)}`);
console.log(`arr after calling arr.unshift(10) : ${arr}`);