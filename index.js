/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK meOW 👇
// 👇 COMPLETE YOUR WORK meOW 👇
// 👇 COMPLETE YOUR WORK meOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood);
  }
}

Person.prototype.poop = function() {
  return this.stomach = []; 
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`; 
}


const me = new Person('Trix', 25);

me.eat("apple")
me.eat("cake");
me.eat("halohalo");
me.eat("mango");
me.eat("orange");
me.eat("kiwi");
me.eat("mango float");
me.eat("berry");
me.eat("pasta");
me.eat("gambas");

me.eat("lechon");
me.eat("chicken");

console.log(me.stomach);

me.poop();
console.log(me.stomach);

me.eat("lechon");
console.log(me.stomach);

me.eat("chicken");
console.log(me.stomach);

console.log(me.toString());

console.log(me.name);


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0; 
}

Car.prototype.fill = function(gallons) {
  this.tank =  gallons + this.tank; 
  return this.tank; 
}

Car.prototype.drive = function(distance) {
  let maxDistance = this.tank * this.milesPerGallon;
  if(distance < maxDistance){
    // STRETCH # 1: cause odometer to go up 
    this.odometer = this.odometer + distance;

    // STRETCH # 2: cause the tank to go down
    const driveMiles = distance / this.milesPerGallon;
    this.tank = this.tank - driveMiles;
  } else {
    this.odometer = this.odometer + maxDistance;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`
  } 
}

const batMobile = new Car('Bat Mobile', 20)

console.log(batMobile);
batMobile.fill(10);
console.log(batMobile.tank);
batMobile.drive(100);
console.log(batMobile.odometer, batMobile.tank);
batMobile.drive(100);
console.log(batMobile.odometer, batMobile.tank);
console.log(batMobile.drive(100));


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype); 

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`
}


/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword meow:
  1. The first principle for 'this' is Window/Global Object Binding. This means that the value of this is the window or console object. 
  2. Implicit Binding. The object before the dot is the value of this whenever a preceding dot calls a function.  
  3. New Binding. When we create a constructor function, 'this' refers to the specific instance of the object created by the function.  
  4. Explicit Binding - Whenever we case the call or apply method in Javascript, this is explicitly defined or declared. We use them by calling .call or .apply with new functions. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
