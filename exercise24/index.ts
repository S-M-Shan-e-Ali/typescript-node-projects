/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/


//Test for equality and inequality with strings.
let str1: string ="SHAN";
let str2: string ="Shan";
console.log("Test for equality and inequality with strings.")
console.log(str1===str2);  //false
console.log(str1 !== str2); //true

//Test using the lower case function

let str3: string = "I AM A PAKISTANI.";
let str4: string = "I am a Pakistani.";
console.log("Test using the lower case function");
console.log(str3.toLowerCase()===str4); // true
console.log(str3.toLowerCase()!==str4); // false

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1: number =8;
let num2: number =4;
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to")
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 < num2); //false
console.log(num1 > num2); //true
console.log(num1 <= num2); //false
console.log(num1 >= num2); //true


//Tests using "and" and "or" operators

let a: number = 2;
let b: number = 3;
let c: number = 4;
console.log("Tests using 'and' and 'or' operators")
console.log(a<b && b<c); //true both condition.
console.log(a>b && b>c); // false both condition.
console.log(a<b || b<c); //true at least one condition.
console.log(a>b || b>c); //false both condition one.

//Test whether an item is in a array

const cities: string[] = ['karachi','lahore','faislabad','pishawar','rawalpandi'];
console.log("Test whether an item is in a array")
for(let i=0; cities.length; i++){
    
    console.log('karachi'=== cities[i])
    break;
}  //true

for(let i=0; cities.length; i++){
    
    console.log('hyderabad'=== cities[i])
    break;
}  //false

//Test whether an item is not in a array
console.log("Test whether an item is not in a array")
for(let i=0; cities.length; i++){
    
    console.log('karachi'!== cities[i])
    break;
}  //false

for(let i=0; cities.length; i++){
    
    console.log('hyderabad'!== cities[i])
    break;
}  //true

export{};