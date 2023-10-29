"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
Object.defineProperty(exports, "__esModule", { value: true });
//Test for equality and inequality with strings.
var str1 = "SHAN";
var str2 = "Shan";
console.log("Test for equality and inequality with strings.");
console.log(str1 === str2); //false
console.log(str1 !== str2); //true
//Test using the lower case function
var str3 = "I AM A PAKISTANI.";
var str4 = "I am a Pakistani.";
console.log("Test using the lower case function");
console.log(str3.toLowerCase() === str4); // true
console.log(str3.toLowerCase() !== str4); // false
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 8;
var num2 = 4;
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 < num2); //false
console.log(num1 > num2); //true
console.log(num1 <= num2); //false
console.log(num1 >= num2); //true
//Tests using "and" and "or" operators
var a = 2;
var b = 3;
var c = 4;
console.log("Tests using 'and' and 'or' operators");
console.log(a < b && b < c); //true both condition.
console.log(a > b && b > c); // false both condition.
console.log(a < b || b < c); //true at least one condition.
console.log(a > b || b > c); //false both condition one.
//Test whether an item is in a array
var cities = ['karachi', 'lahore', 'faislabad', 'pishawar', 'rawalpandi'];
console.log("Test whether an item is in a array");
for (var i = 0; cities.length; i++) {
    console.log('karachi' === cities[i]);
    break;
} //true
for (var i = 0; cities.length; i++) {
    console.log('hyderabad' === cities[i]);
    break;
} //false
//Test whether an item is not in a array
console.log("Test whether an item is not in a array");
for (var i = 0; cities.length; i++) {
    console.log('karachi' !== cities[i]);
    break;
} //false
for (var i = 0; cities.length; i++) {
    console.log('hyderabad' !== cities[i]);
    break;
} //true
