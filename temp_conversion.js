//to convert C to F

var temp = parseFloat(prompt("Enter a temperature to convert from Celsius to Fahrenheit."));//parseFloat makes string to number
var conversion = (9.0 / 5.0) * (temp + 32);
alert("Your temperature is " + conversion + " degrees Fahrenheit.");


//to convert either way
function celsius(input) {
    var conversion = (5.0 / 9.0) * (input - 32);
    return conversion;
}

function fahrenheit(input) {
    var conversion = (9.0 / 5.0) * (input + 32);
    return conversion;
}

var temp = parseFloat(prompt("Enter a temperature to convert."));
var converter = prompt("Enter 'C' to convert to Celsius or 'F' for Fahrenheit.");
converter = converter.toUpperCase();

if (converter === 'C') {
    alert("Your temperature is " + celsius(temp) + " degrees Celsius.");
} else if (converter === 'F') {
    alert("Your temperature is " + fahrenheit(temp) + " degrees Fahrenheit.");
}
