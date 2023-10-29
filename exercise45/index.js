/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
function stores_information(manufacturer, model_name, color, feature) {
    var car = {
        manufacturer: manufacturer,
        model_name: model_name,
        color: color,
        feature: feature,
    };
    return car;
}
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
var b = stores_information("Honda", 2022, "Red", "Power staring");
console.log(b);
