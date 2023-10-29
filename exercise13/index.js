var favTransport = [];
favTransport.push(["Bike", "Honda"]);
favTransport.push(["Bike", "SuperPower"]);
favTransport.push(["Car", "Honda"]);
favTransport.push(["Car", "Toyota"]);
favTransport.push(["Car", "Alto"]);
favTransport.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log("I would like to  own a ".concat(brand, " ").concat(transport));
});
