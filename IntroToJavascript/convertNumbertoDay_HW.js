//function using switch statement to output the day of the week with 0-6 numbers
//input: number
//output: the day of the week (sunday for 0) call 7 times

function convertNumbertoDay(number){
    switch (number){
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Not a valid input");
    }
}

convertNumbertoDay(0);
convertNumbertoDay(1);
convertNumbertoDay(2);
convertNumbertoDay(3);
convertNumbertoDay(4);
convertNumbertoDay(5);
convertNumbertoDay(6);
