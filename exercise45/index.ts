/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/


function stores_information(manufacturer:string, model_name:number, color?:string, feature?:string){

    let car={
        manufacturer,
        model_name,
        color,
        feature,
    }

    return car
}

//Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
let b=stores_information("Honda",2022,"Red","Power staring");
console.log(b);

