/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
var magicians = ["Harry Porter", "Ron Weasley", "Hermione Granger"];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
;
show_magicians(magicians);
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
console.log("\nModifiy magicians list.");
function make_great() {
    for (var i = 0; i < magicians.length; i++) {
        console.log("Great ".concat(magicians[i]));
    }
}
//Call show_magicians() to see that the list has actually been modified.
make_great();
