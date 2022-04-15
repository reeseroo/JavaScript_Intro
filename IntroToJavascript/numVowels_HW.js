//function that takes a string and outputs the number of vowels the string has
//input: string
//output: number of vowels
//call three times

function numVowels(string){
    var vowelNumber = 0;
    string = string.toLowerCase();
    for (i = 0; i < string.length; i++){
        var currentCheck = string[i];
        if(currentCheck == "a" || currentCheck == "e" || currentCheck == "i" || currentCheck == "o" || currentCheck == "u"){
        vowelNumber++;
        }
    }return vowelNumber;
}

console.log (numVowels("Hello All")); //3
console.log(numVowels("Testing the JavaScript")); //6
console.log(numVowels("AeIoU")); //5
