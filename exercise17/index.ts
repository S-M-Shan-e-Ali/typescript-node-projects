/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/


// Exercise14............................................................................................
//first Guest List in Array
let guestList:Array<string>=["Zia Khan","Imran","Shan","Junaid","Hussain","Ali"];

// Loop for Guest Invition 
/*
guestList.forEach((guestName)=>{ 
    console.log(`Respected ${guestName} sir, you'r invited to dinner, please join us.`);
})
*/
//Guest Name who can't make it.
let guestNotCome="Imran";

// console.log(`\nbut in this list ${guestNotCome} can't make it to Dinner. So Modify List is that\n`);


//Modify Guuest Name
guestList[1]="Usman";

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
let beginningNewGuest ="Rizwan"
guestList.unshift(beginningNewGuest);

//step 3. Add one new guest to middle of your array.

let middleNewGuest:string="Quaid e Azam";

let middleIndex : number=guestList.length/2;
let middleIndexNewLength:any=middleIndex.toFixed();

guestList.splice(middleIndexNewLength, 0, middleNewGuest);

// use append() to Add one of new guest to end of your array.
let endNewGuest:string="Liaqat Ali";

guestList.push(endNewGuest);


//step 5. Print new set of invitation messages, one for each person in your list.
/*
console.log("\n________________________________________________________________________________________________________\n")

guestList.forEach((guestName)=>{ 
    console.log(`Respected ${guestName} sir, you'r invited to dinner, please join us.`);
})
*/

//-----------------------------------EXERCISE 17-----------------------------------------------

console.log(`I've invite only two people for dinner.\n`);

//Remove guests until remain two guest. and print message cant invite.
while(guestList.length>2){

    let removGuest=guestList.pop();
    console.log(`Sorry, Sir ${removGuest}, I can't invit you to dinner yet.`)
    
}
console.log("\n-------------------------------------------------------------------------------------------\n");

//remain two guest print message to still invited.

for(let guests of guestList){
    console.log(`Hello, Sir ${guests}, You're still invited to dinner.`)
    }

console.log("\n-------------------------------------------------------------------------------------------\n");


//Remove remain guest to empty list and print list
while(guestList.length>0){ let removGuest=guestList.pop();}


console.log(`Sorry! I've empty List. ${guestList}`)