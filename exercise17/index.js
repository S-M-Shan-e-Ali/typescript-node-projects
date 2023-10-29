// Exercise14............................................................................................
//first Guest List in Array
var guestList = ["Zia Khan", "Imran", "Shan", "Junaid", "Hussain", "Ali"];
// Loop for Guest Invition 
/*
guestList.forEach((guestName)=>{
    console.log(`Respected ${guestName} sir, you'r invited to dinner, please join us.`);
})
*/
//Guest Name who can't make it.
var guestNotCome = "Imran";
// console.log(`\nbut in this list ${guestNotCome} can't make it to Dinner. So Modify List is that\n`);
//Modify Guuest Name
guestList[1] = "Usman";
//Second set of Invitation.
/*
guestList.forEach((guestName)=>{
    console.log(`Respected ${guestName} sir, you'r invited to dinner, please join us.`);
})
*/
// Exercise 16 Start.....................................................................................
//step 1. informing Guest that you found a bigger dinner table.
//console.log("\n________________________________________________________________________________________________________\n")
/*
for (let guest of guestList){

    console.log(`Hello, Sir ${guest}, We have found a bigger dinner table.`)
}
*/
//step 2. Add one new guest to beginning of your array.
var beginningNewGuest = "Rizwan";
guestList.unshift(beginningNewGuest);
//step 3. Add one new guest to middle of your array.
var middleNewGuest = "Quaid e Azam";
var middleIndex = guestList.length / 2;
var middleIndexNewLength = middleIndex.toFixed();
guestList.splice(middleIndexNewLength, 0, middleNewGuest);
// use append() to Add one of new guest to end of your array.
var endNewGuest = "Liaqat Ali";
guestList.push(endNewGuest);
//step 5. Print new set of invitation messages, one for each person in your list.
/*
console.log("\n________________________________________________________________________________________________________\n")

guestList.forEach((guestName)=>{
    console.log(`Respected ${guestName} sir, you'r invited to dinner, please join us.`);
})
*/
//-----------------------------------EXERCISE 17-----------------------------------------------
console.log("I've invite only two people for dinner.\n");
//Remove guests until remain two guest. and print message cant invite.
while (guestList.length > 2) {
    var removGuest = guestList.pop();
    console.log("Sorry, Sir ".concat(removGuest, ", I can't invit you to dinner yet."));
}
console.log("\n-------------------------------------------------------------------------------------------\n");
//remain two guest print message to still invited.
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guests = guestList_1[_i];
    console.log("Hello, Sir ".concat(guests, ", You're still invited to dinner."));
}
console.log("\n-------------------------------------------------------------------------------------------\n");
//Remove remain guest to empty list and print list
while (guestList.length > 0) {
    var removGuest = guestList.pop();
}
console.log("Sorry! I've empty List. ".concat(guestList));
