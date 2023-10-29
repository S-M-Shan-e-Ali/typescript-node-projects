/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/


    let userNames: string[]=["admin","guest1","guest2","guest3","guest4","guest5"];
    

    // If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report? 

    let checkUser:string = "admin"; //change user name

    for(let i=0; i<userNames.length; i++){
    if(checkUser===userNames[i]){
        console.log(`Hello ${checkUser}, would you like to see a status report?`);
        
        
    }else if(checkUser===userNames[i]){
    console.log(`Hello ${checkUser}, thank you for logging in again.`);
    
    }
}


// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

checkUser = "guest3"; //change user name

    for(let i=0; i<userNames.length; i++){
    if(checkUser===userNames[i]){
        console.log(`Hello ${checkUser}, would you like to see a status report?`);
        
        
    }else if(checkUser===userNames[i]){
        console.log(`Hello ${checkUser}, thank you for logging in again.`);
        
        }
    
    
}
