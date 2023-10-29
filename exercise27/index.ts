/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/




let alien_color: string = "green";

//If the alien is green, print a message that the player earned 5 points.

console.log("alien_color " + alien_color);
if(alien_color=="green"){
    console.log("Congratulation! You have earned 5 points.")
}
//If the alien is yellow, print a message that the player earned 10 points.
if(alien_color=="yellow"){
    console.log("Congratulation! You have earned 10 points.")
}
//If the alien is red, print a message that the player earned 15 points.
if(alien_color=="red"){
    console.log("Congratulation! You have earned 15 points.")
}

alien_color = "yellow";
//Write three versions of this program, making sure each message is printed for the appropriate color alien.

alien_color = "yellow";

console.log("alien_color " + alien_color);
if(alien_color=="green"){
    console.log("Congratulation! You have earned 5 points.")
}
if(alien_color=="yellow"){
    console.log("Congratulation! You have earned 10 points.")
}if(alien_color=="red"){
    console.log("Congratulation! You have earned 15 points.")
}

alien_color = "red";

console.log("alien_color " + alien_color);
if(alien_color=="green"){
    console.log("Congratulation! You have earned 5 points.")
}
if(alien_color=="yellow"){
    console.log("Congratulation! You have earned 10 points.")
}if(alien_color=="red"){
    console.log("Congratulation! You have earned 15 points.")
}

