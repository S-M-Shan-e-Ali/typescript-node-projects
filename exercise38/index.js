/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
*/
//Write a function called describe_city() that accepts the name of a city and its country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    //The function should print a simple sentence, such as Karachi is in Pakistan.Give the parameter for the country a default value.
    console.log("".concat(city, " is in ").concat(country));
}
//Call your function for three different cities, at least one of which is not in the default country.
describe_city("Karachi");
describe_city("Lahore");
describe_city("Mumbai", "India");