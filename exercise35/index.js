/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

*/
// Three different animals that have a common characteristic.
//Store the names of these animals in a list.
var animals = ["cat", "dog", "got"];
//and then use a for loop to print out the name of each animal.
console.log("List of animals :");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
//Modify your program to print a statement about each animal, such as A dog would make a great pet.
console.log("\nModify statement about each animal");
for (var i = 0; i < animals.length; i++) {
    if (animals[i] == "dog") {
        console.log("A ".concat(animals[i], " would make a great pet."));
    }
    else if (animals[i] == "cat") {
        console.log("A ".concat(animals[i], " would make a great choice at home."));
    }
    else if (animals[i] == "got") {
        console.log("A ".concat(animals[i], " is an pet that also give us a milk."));
    }
}
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
