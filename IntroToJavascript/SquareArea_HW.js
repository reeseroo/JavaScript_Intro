//sum of square areas
// inputs: a, b
// output: sum of areas of the two squares, a and b

function squareAreaSum (a, b){
    a = a * a;
    b = b * b;
    return a + b;
}

var firstcase = squareAreaSum(2, 5);
var seccase = squareAreaSum(9, 3);
var thirdcase = squareAreaSum(6, 9);

console.log(firstcase);
console.log(seccase);
console.log(thirdcase);