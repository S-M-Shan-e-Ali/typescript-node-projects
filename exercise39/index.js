/*
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
console.log("\"".concat(city_country("Lahore", "Pakistan"), "\""));
console.log("\"".concat(city_country("Jaddah", "Dubai"), "\""));
console.log("\"".concat(city_country("Makkah", "Saudi Arab"), "\""));
