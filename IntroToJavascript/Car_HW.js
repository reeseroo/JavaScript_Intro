//create a constructor for a car object. Should contain the properties: model, year, color, mpg
//create 3 car objects
//output: mpg of each car

function NewCar(model, year, color, mpg){
    this.model = model;
    this.year = year;
    this.color =color;
    this.mpg = mpg;
}

var Car1 = new NewCar("toyota", 2012, "blue", 51.2);
var Car2 = new NewCar("Honda", 2050, "red", 41.9);
var Car3 = new NewCar("tesla", 2022, "White", 180.5);

console.log(Car1.mpg);
console.log(Car2.mpg);
console.log(Car3.mpg);

//create a vehicle constructor with car as the property
//print out the mpg of car in each vehical object

function vehicle(car){
    this.car = car;
}

var Car1V = new vehicle(Car1);
var Car2V = new vehicle(Car2);
var Car3V = new vehicle(Car3);

console.log(Car1V.car.mpg);
console.log(Car2V.car.mpg);
console.log(Car3V.car.mpg);