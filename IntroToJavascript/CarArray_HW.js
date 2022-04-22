//for look to make a 2D array of car objects (10x10 row) Car should have color, year, mpg, and id
//car should have same values for model, color, year and mpg but incremented values for id (1, 2, 3, etc)

function Car(model, color, year, mpg, id){
    this.model = model;
    this.color = color;
    this.year = year;
    this.mpg = mpg;
    this.id = id;
}

var eachItem = [];
for (var i = 0; i< 10; i++){
    var allcars = [];
    for (var c = 0; c<10;c++){
        allcars.push(new Car("Prius", "White", 2014, 32.0, i*10+c+1));
    }eachItem.push(allcars);
}


//funtion that takes idMin and idMax. returns an array of Cars that have an id betwwen idmin and idmax. 
//change all the car colors to blue. call 3 times and print to terminal

function getCarsBetweenIds(idMin, idMax, eachItem) {
    var numCars = eachItem.length * eachItem[0].length;
    if (idMin < 1) {
        console.log("Invalid idMin value");
        return [];
    }
    if (idMax > numCars) {
        console.log("Invalid idMax value");
        return [];
    }
    var cars = [];
    // obtain starting row and starting column values
    var currentRow = Math.floor(idMin / 10);
    if (idMin % 10 == 0) {
        currentRow--;
    }
    var currentCol = (idMin - 1) % 10;
    var currentCarId = eachItem[currentRow][currentCol].id;
    // iterate until we have obtained all of the cars within the range of ids
    while (currentCarId <= idMax) {
        var car = eachItem[currentRow][currentCol];
        car.color = "blue";
        cars.push(car);
        // update current row and current column values
        if (currentCol % 9 == 0 && currentCol != 0) {
            currentCol = 0;
            currentRow++;
        } else {
            currentCol++;
        }
        currentCarId++;
    }
    return cars;
}
console.log(getCarsBetweenIds(64, 72, eachItem));
console.log(getCarsBetweenIds(1, 100, eachItem));
console.log(getCarsBetweenIds(33, 42, eachItem));
console.log(getCarsBetweenIds(-1, 100, eachItem)); // invalid idMin
console.log(getCarsBetweenIds(1, 200, eachItem)); // invalid idMax