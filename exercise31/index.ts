/*
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/



let userNames: string[]=[];
//userNames.push("admin");
//userNames.push("guest1");
//userNames.push("guest2");
//userNames.push("guest3");


// Remove all of the usernames from your array, and make sure the correct message is printed
if(userNames.length==0){

console.log("We need to find some user.")
}

let checkUser:string = "admin"; //change user name or take input with prompt method

for(let i=0; i<userNames.length; i++){

    if(checkUser===userNames[i]){
        console.log(`Hello ${checkUser}, would you like to see a status report?`);
        
        
    }else if(checkUser===userNames[i]){
    console.log(`Hello ${checkUser}, thank you for logging in again.`);
    
    }
}
