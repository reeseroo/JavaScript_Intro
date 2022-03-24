//compare guess to a set number with a function
//Inputs: guess
//outputs: "you guessed my favorite number" if correct, "try again" if wrong. Call multiple times


function guessMyFavoriteNumber(guess){
    if (guess == 8){
        console.log("You guessed my favorite number!");
    }else {
        console.log("Try again")
    }
}

guessMyFavoriteNumber(14);
guessMyFavoriteNumber(-234);
guessMyFavoriteNumber(34);
guessMyFavoriteNumber(2);
guessMyFavoriteNumber(8);
