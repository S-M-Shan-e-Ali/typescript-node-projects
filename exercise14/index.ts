/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/


let gestList:Array<string>=["Zia Khan","Imran","Shan","Junaid","Hussain","Ali"];

// Loop for Inviting

gestList.forEach((guestName)=>{ 
    console.log(`Respected ${guestName} sir, you'r invited to dinner, please join us.`);
})