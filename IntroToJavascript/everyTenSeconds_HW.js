// funtion that prints "hello world" every 10 seconds for 2 minutes
//output: "hello world"

function everyTenSeconds (){
    console.log("Hello World");
}


var intervalId = setInterval(everyTenSeconds, 10000);
setTimeout(clearInterval, 121000, intervalId);