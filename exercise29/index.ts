/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/



//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

let favorite_fruits: string[]=["banana","apple","orange","grape","Peach","kiwi","cherry"];

let checkfruit : string = "banana"; //change value and check for certain fruits in your array.

for(let i=0; i<favorite_fruits.length; i++ ){

if(favorite_fruits[i]===checkfruit){
console.log(`I like ${checkfruit}`)
}

}


//Make a array of your three favorite fruits and call it favorite_fruits.
let favoriteFruits : string[]=["apple","banana","grape"];
console.log(favoriteFruits);


//Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_Fruits: string[]=["banana","apple","orange","grape","cherry"];

let checkFruit : string = "banana"; //change value and check for certain fruits in your array.

for(let i=0; i<favorite_fruits.length; i++ ){

if(favorite_Fruits[i]==="banana"){
console.log(`You really like "banana"`)
}
if(favorite_Fruits[i]==="apple"){
    console.log(`You really like "apple"`)
}
if(favorite_Fruits[i]==="orange"){
    console.log(`You really like ","orange"`)
}
if(favorite_Fruits[i]==="grape"){
    console.log(`You really like "grape"`)
}
if(favorite_Fruits[i]==="cherry"){
    console.log(`You really like "cherry"`)
}

}


