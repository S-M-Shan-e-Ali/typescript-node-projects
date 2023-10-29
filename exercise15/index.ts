/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
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

export{guestList};