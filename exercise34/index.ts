/*
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

*/



//favorite pizza name in array.

const favorite_pizz: string[]=["cheese pizza","meat pizza","veggie pizza"];
let i:number=0;
for(i; i<favorite_pizz.length; i++){
    console.log(favorite_pizz[i]);
}

i=0;
//output containing a simple statement like I like pepperoni pizza.
for(i; i<favorite_pizz.length; i++){
    console.log(`I like ${favorite_pizz[i]}.`);
}


// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

console.log("\nHow much you like pizza?");
console.log(`I should consist of ${i} kinds of pizza.`);
console.log("I really love pizza!");