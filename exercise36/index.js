/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
//Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
function make_shirt(size, text) {
    //The function should print a sentence summarizing the size of the shirt and the message printed on it.
    console.log("Size of make Shirt is ".concat(size, ". ").concat(text));
}
var size = "medium";
var text = "Shan-e-Ali";
make_shirt(size, text);
