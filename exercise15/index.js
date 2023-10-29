"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
// Exercise14............................................................................................
//first Guest List in Array
var guestList = ["Zia Khan", "Imran", "Shan", "Junaid", "Hussain", "Ali"];
exports.guestList = guestList;
// Loop for Guest Invition 
guestList.forEach(function (guestName) {
    console.log("Respected ".concat(guestName, " sir, you'r invited to dinner, please join us."));
});
//Guest Name who can't make it.
var guestNotCome = "Imran";
console.log("\nbut in this list ".concat(guestNotCome, " can't make it to Dinner. So Modify List is that\n"));
//Modify Guuest Name
guestList[1] = "Usman";
//Second set of Invitation.
guestList.forEach(function (guestName) {
    console.log("Respected ".concat(guestName, " sir, you'r invited to dinner, please join us."));
});
