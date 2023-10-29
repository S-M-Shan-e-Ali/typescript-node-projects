/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/



function make_shirt(size:string= "Large", text:string= "I love TypeScript."){
console.log(`Size of make Shirt is ${size}. ${text}`);
}

//Modify the make_shirt are large by default.

make_shirt();

//Make a large and medium shirt with the default message.

let size="Medium";
make_shirt(size);

//and other size of shirt with different size with a different message.
 size="small";
let text="I love TypeScript and also HTML or CSS."
make_shirt(size,text);

