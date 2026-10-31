//exercise 1
var thisIsaNewVariable = 10;
if (thisIsaNewVariable == 10) {

    // code block;

}

//exercise 2

let stringDeclare = 'I am a string.';
let floatNumberDeclare = 100.54;
let booleanValueDeclare = true;

//exercise 3
//represents current score
let currentScore = 95;

//exercise 4
let stringComparison = '100';
let numberComparison = 100;
console.log(stringComparison == numberComparison);
console.log(stringComparison === numberComparison);

//exercise 5
let isWeekend = false;
let schedule = isWeekend == true ? "Day off" : "Work Day";

//exercise 6
let userAge = 16;
if (userAge >= 18){
    console.log("Access Granted")
} else {
    console.log("Access Denied")
}

//exercise 7
let hasPermission = true;
let itemCount = 3;
if (hasPermission == true && itemCount < 5){
    console.log("Ready to process")
}

//exercise 8
for (i = 1; i <= 5; i++){
    console.log("iteration number " + i)
}

//exercise 9
for (i = 1; i <= 9; i++){
    console.log("the iteration is " + i)
    if (i >= 7){
        break;
    }
}

//exercise 10
let counter = 10;
do {
    counter = counter - 1;
    console.log("hello guys I am the do while loop")
} while(counter < 2)

//exercise 11
function calculateArea(width, height) {
    area = width*height
    return area
}

resultArea = calculateArea(5,10)

//exercise 12
fruitList = ['Apple', 'Banana'];
fruitList.push("Grape");
fruitList.shift();
console.log(fruitList.indexOf("Banana"))

//exercise 13
let originalData = [1, 2, 3, 4, 5, 939231];
let clonedData = originalData.slice(0,7)
console.log(clonedData)

//the slice method duplicates the data and does not remove and data from the original array.
//that is what is needed to be kept in mind.

//exercise 14
function Animal(species, sound){
    this.species = species;
    this.sound = sound; 
}

//exercise 15
let dog = Animal("Canine", "Woof");
let cat = Animal("Feline", "Meow");
animalArray = [dog, cat];
