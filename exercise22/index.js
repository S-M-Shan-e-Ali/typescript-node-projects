"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
function creatAnimals(name, color, eat) {
    return {
        name: name,
        color: color,
        eat: eat
    };
}
// creat an Array for animals
var animals = [
    creatAnimals("Dog", "Brown", "meat"),
    creatAnimals("Cow", "White", "grass"),
    creatAnimals("Cat", "Yellow", "meat"),
    creatAnimals("Horse", "Black&White", "grass"),
    creatAnimals("Got", "Brown", "grass"),
];
// create invalid index
var invalidIndex = 8; //Only 5 item in an array, that was creat Error;
console.log("Animal at index ".concat(invalidIndex, ": "), animals[invalidIndex]);
// Console the Animals
animals.forEach(function (animal) {
    console.log("Name: ".concat(animal.name, ", Color: ").concat(animal.color, ", Eat: ").concat(animal.eat));
});
