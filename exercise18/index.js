//--------------------------------EXERCISE 18--------------------------------------------
//Think of at least five places in the world you'd like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Step 1. Store the location in a array. make sure the array is not in alphabetical order.
var travelLocation = ["Germany", "England", "Saudia", "America", "Iran"];
//Step 2. Print your array in its Original order.
console.log("\n------------------Original Order-------------------\n");
console.log(travelLocation);
//Step 3. Print your array in Alphabetical order without modifying the actual list.
console.log("\n------------------Alphabetical Order without modifying-------------------\n");
console.log(__spreadArray([], travelLocation, true).sort());
//Step 4. Show that your array is still in its Original Order by printing again.
console.log("\n------------------Original Order-------------------\n");
console.log(travelLocation);
//Step 5. Reverse the order of your list. Print the array to show that its order hs changed.
console.log("\n------------------Revers Original Order-------------------\n");
console.log(__spreadArray([], travelLocation, true).reverse());
//Step 6. Show that your Reverse array is still in its Original Order by printing again.
console.log("\n------------------Original Order-------------------\n");
console.log(travelLocation);
//Step 7. Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n------------------Alphabetical Order with modifying-------------------\n");
console.log(travelLocation.sort());
//Step 8. Sort to change your array so it's stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("\n------------------Reverse Alphabetical Order with modifying-------------------\n");
console.log(__spreadArray([], travelLocation, true).reverse());
