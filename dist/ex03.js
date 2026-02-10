"use strict";
// Exercise: Write a function `logValues` that takes an array of any type of values (numbers, strings, booleans, etc.).
// The function should iterate through the array and log each value along with its type.
function logValues(values) {
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
    console.log(values[3]);
}
logValues([42, "Hello", true, { name: "Alice" }]);
// Expected output:
// 42 (number)
// "Hello" (string)
// true (boolean)
// { name: "Alice" } (object)
