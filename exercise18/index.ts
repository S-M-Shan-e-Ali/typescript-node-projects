
/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

//--------------------------------EXERCISE 18--------------------------------------------
//Think of at least five places in the world you'd like to visit.

//Step 1. Store the location in a array. make sure the array is not in alphabetical order.

let travelLocation:string[]=["Germany","England","Saudia","America","Iran"];

//Step 2. Print your array in its Original order.

console.log("\n------------------Original Order-------------------\n");
console.log(travelLocation);

//Step 3. Print your array in Alphabetical order without modifying the actual list.
console.log("\n------------------Alphabetical Order without modifying-------------------\n");
console.log([...travelLocation].sort());

//Step 4. Show that your array is still in its Original Order by printing again.
console.log("\n------------------Original Order-------------------\n");
console.log(travelLocation);

//Step 5. Reverse the order of your list. Print the array to show that its order hs changed.
console.log("\n------------------Revers Original Order-------------------\n");
console.log([...travelLocation].reverse());

//Step 6. Show that your Reverse array is still in its Original Order by printing again.
console.log("\n------------------Original Order-------------------\n");
console.log(travelLocation);

//Step 7. Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n------------------Alphabetical Order with modifying-------------------\n");
console.log(travelLocation.sort());

//Step 8. Sort to change your array so it's stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("\n------------------Reverse Alphabetical Order with modifying-------------------\n");
console.log([...travelLocation].reverse());
