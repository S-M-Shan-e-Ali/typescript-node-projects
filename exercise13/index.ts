/*
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/


let favTransport: Array<[transport:string, brand:string]>=[];

favTransport.push(["Bike","Honda"]);
favTransport.push(["Bike","SuperPower"]);
favTransport.push(["Car","Honda"]);
favTransport.push(["Car","Toyota"]);
favTransport.push(["Car","Alto"]);

favTransport.forEach(
    ([transport, brand])=>{console.log(`I would like to own a ${brand} ${transport}`)}
)