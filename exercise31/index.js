/*
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var userNames = [];
//userNames.push("admin");
//userNames.push("guest1");
//userNames.push("guest2");
//userNames.push("guest3");
// Remove all of the usernames from your array, and make sure the correct message is printed
if (userNames.length == 0) {
    console.log("We need to find some user.");
}
var checkUser = "admin"; //change user name or take input with prompt method
for (var i = 0; i < userNames.length; i++) {
    if (checkUser === userNames[i]) {
        console.log("Hello ".concat(checkUser, ", would you like to see a status report?"));
    }
    else if (checkUser === userNames[i]) {
        console.log("Hello ".concat(checkUser, ", thank you for logging in again."));
    }
}
