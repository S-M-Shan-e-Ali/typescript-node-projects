/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/



//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

let alien_color: string = "green"; //"yellow"; "red"";
console.log("alien_color " + alien_color);
if(alien_color=="green"){
    console.log("Congratulation! You have earned 5 points.")
}

//If the alien’s color isn’t green, print a statement that the player just earned 10 points.

else
console.log("Congratulation! You have earned 10 points.")

//Write one version of this program that runs the if block and another that runs the else block.

alien_color = "yellow";  // "red""; "green";
console.log("alien_color " + alien_color);
if(alien_color=="green"){
    console.log("Congratulation! You have earned 5 points.")
}else
console.log("Congratulation! You have earned 10 points.")