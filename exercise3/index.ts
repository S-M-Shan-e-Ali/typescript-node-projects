/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let Personalmsg:string ="Syed Muhammad Shan-e-Ali";
let LowerCaseName:string=Personalmsg.toLowerCase();
let UpperCaseName:string=Personalmsg.toUpperCase();

let TitleCaseName:string[]=[];
let word=LowerCaseName.split(' ');
 
for(let i=0; i<word.length; i++){

    TitleCaseName[i]= word[i].charAt(0).toUpperCase()+word[i].slice(1);
}


console.log("Personal Name in LowerCase is '" + LowerCaseName + "'");
console.log("Personal Name in UpperCase is '" + UpperCaseName + "'");
console.log("Personal Name in TitleCase is '" + TitleCaseName.join(' ') + "'");