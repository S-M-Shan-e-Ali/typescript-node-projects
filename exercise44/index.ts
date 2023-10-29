/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/



//Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides.



function sandwich(items:any[]){

for(let i=0; i<items.length; i++){
    console.log(`${items[i]} = ${items[i+1]}`);
    i++
}

}


//Call the function three times, using a different number of arguments each time.
console.log("person1 summary order");
sandwich(["cheese",3,"tikka",5,"mali booti",2]);
console.log("\nperson2 summary order");
sandwich(["tikka",3,"tikka",5,]);
console.log("\nperson3 summary order");
sandwich(["tikka",5,"cheese",3,"mali booti",2,"tomato booti",1,]);



