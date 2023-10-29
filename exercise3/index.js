var Personalmsg = "Syed Muhammad Shan-e-Ali";
var LowerCaseName = Personalmsg.toLowerCase();
var UpperCaseName = Personalmsg.toUpperCase();
var TitleCaseName = [];
var word = LowerCaseName.split(' ');
for (var i = 0; i < word.length; i++) {
    TitleCaseName[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
}
console.log("Personal Name in LowerCase is '" + LowerCaseName + "'");
console.log("Personal Name in UpperCase is '" + UpperCaseName + "'");
console.log("Personal Name in TitleCase is '" + TitleCaseName.join(' ') + "'");
