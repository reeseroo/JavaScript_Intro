//function that takes strings (array of strings) and length (number) and returns that number of strings that are smaller than length
//input: strings and length
//output: number of strings with less length

function numStringsShorterThanLength (strings, length){
    var stringsThatAreShorter = 0;
    for (var i = 0; i < strings.length; i++){
        if (strings[i].length < length){
            stringsThatAreShorter ++;
        }
    } return stringsThatAreShorter;
}

console.log(numStringsShorterThanLength(["abcde", "xyz"], 4)) //1
console.log(numStringsShorterThanLength(["Taylor Swift", "Alec Benjamin", "Peter McPoland"] , 4)) //0
console.log(numStringsShorterThanLength(["ECE", "MECHE", "CHEME"], 6)) //3