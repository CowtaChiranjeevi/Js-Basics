// Numbers

// An integer is a whole number
const myNumber = 42;

// A number with a decimal point is float which references the "floating point".
const myFloat = 42.01;

const myString = "42";

console.log(Number("Rahul"));

// The Number.isInteger() defines if an entered value is integer or not. It counts float as also not integer.
console.log(Number.isInteger(90.1));

// Parse float
const mypFloat = 42.14567;
console.log(mypFloat.toFixed(2));