//a function that accepets a parameter:string and returns the reversed string.
//input: String
//output: reversed string
//call this function 3 times with different inputs

function reverse (string){
    var reversedOutput = "";
    for (var i = string.length -1; i >= 0; i--){
        reversedOutput += string[i]
    }
    return reversedOutput;
}


console.log(reverse("trial1"));
console.log(reverse("reverseFunction"));
console.log(reverse("Google"));
