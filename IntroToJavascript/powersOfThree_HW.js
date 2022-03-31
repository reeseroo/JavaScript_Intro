//function prints out the powers of 3 up to 3^9. Pick your favorite number out of all of these powers of three
//print out “This is my favorite power of three!” when your favorite power of three prints. Use a timeout to call this function after waiting 3 seconds.
//output: powers of 3 3^0-3^9 and "this is my favorite power of three"


function powersOfThree(){
    for(num = 1; num <= 19683; num *= 3){
        console.log(num);
        if(num == 9){
            console.log("this is my favorite power of three")
        }
    }
} 
setTimeout(powersOfThree, 3000);