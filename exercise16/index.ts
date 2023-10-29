/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/



// Exercise14............................................................................................
//first Guest List in Array
let guestList:Array<string>=["Zia Khan","Imran","Shan","Junaid","Hussain","Ali"];

// Loop for Guest Invition 

guestList.forEach((guestName)=>{ 
    console.log(`Respected ${guestName} sir, you'r invited to dinner, please join us.`);
})

//Guest Name who can't make it.
let guestNotCome="Imran";
console.log(`\nbut in this list ${guestNotCome} can't make it to Dinner. So Modify List is that\n`);


//Modify Guuest Name
guestList[1]="Usman";

//Second set of Invitation.
guestList.forEach((guestName)=>{ 
    console.log(`Respected ${guestName} sir, you'r invited to dinner, please join us.`);
})


// Exercise 16 Start.....................................................................................

//step 1. informing Guest that you found a bigger dinner table.
console.log("\n________________________________________________________________________________________________________\n")
for (let guest of guestList){

    console.log(`Hello, Sir ${guest}, We have found a bigger dinner table.`)
}

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
console.log("\n________________________________________________________________________________________________________\n")

guestList.forEach((guestName)=>{ 
    console.log(`Respected ${guestName} sir, you'r invited to dinner, please join us.`);
})

