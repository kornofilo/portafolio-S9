//a function definition is a regular binding where the
//value of the binding is a function

//function that produces a given number:
const square = function (x) {
    return x * x;
};

console.log(square(12));

//a function can have multiple parameters or no parameters
const makeNoise = function () {
    console.log("pling");
};
makeNoise()

const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));