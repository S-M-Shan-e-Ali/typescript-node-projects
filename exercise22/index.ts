/* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/
function creatAnimals(name: string, color:string, eat: string){
return{
    name,
    color,
    eat
        }
}

// creat an Array for animals

const animals=[
    creatAnimals("Dog","Brown","meat"),
    creatAnimals("Cow","White","grass"),
    creatAnimals("Cat","Yellow","meat"),
    creatAnimals("Horse","Black&White","grass"),
    creatAnimals("Got","Brown","grass"),
    
]

// create invalid index
const invalidIndex = 8; //Only 5 item in an array, that was creat Error;

console.log(`Animal at index ${invalidIndex}: `, animals[invalidIndex]);

// Console the Animals

animals.forEach((animal)=>{
    console.log(`Name: ${animal.name}, Color: ${animal.color}, Eat: ${animal.eat}`);
})



export{};