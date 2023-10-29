/*
Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
var magicians = ["Harry Porter", "Ron Weasley", "Hermione Granger"];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
;
console.log("\nModifiy magicians list.");
function make_great() {
    for (var i = 0; i < magicians.length; i++) {
        console.log("Great ".concat(magicians[i]));
    }
    return magicians;
}
//Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
var great_magican = make_great();
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log("\nOriginal magicians name");
show_magicians(magicians);
