// ****************************************************TASK 1 - OBJECTS****************************************************

let personA = {
    name: 'Robert',
    age: 45,
    location: 'Birmingham',
    likes: 'music'
};

let personB = {
    name: 'suzannah',
    age: 30,
    location: 'Birmingham',
    likes: 'gaming'

};

let personC = {
    name: 'Mya',
    age: 37,
    location: 'Birmingham',
    likes: 'cooking'
};

let personD = {
    name: 'Jacynth',
    age: 60,
    location: 'St.Lucia',
    likes: 'socialising'

}

function biography(person) {
    return ("Hi my name is " + person.name + " I am " + person.age + " years old, I live in " + person.location + " and I like " + person.likes)
}


console.log(biography(personA));
console.log(biography(personB));
console.log(biography(personC));
console.log(biography(personD));















// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

 const addition = x + y;
 
console.log("Addition: x + y + y + x  " + addition);

const subtraction = x - y;

 console.log("Subtraction: x - y " + subtraction);

 const multiplication = x * x * y * y;

 console.log("multiplication: x * x * y * y " + multiplication);
 
 const division = x * y;

 console.log("Division: x + y " + division);

 














// ****************************************************TASK 3****************************************************

const person = {
    name: "Tavia",
    age: 21,
    location: "Birmingham",
    likes: "gaming"
}
const drivingAge = 17;

const isOldEnough = drivingAge < person.age;

console.log(person.name + " is old enough to drive? " + isOldEnough);


// HOMEWORK

/*function calculator(x,y,operation) {

    var add = function(x,y) { 
        return x + y
    };

    var subtract = function(x,y) {
        return x - y
    };

    var divide = function(x,y) {
        return x / y
    };

    var multiply = function(x,y) {
        return x * y
    };

    var operations = {
        '+': add,
        '-': subtract,
        '/': divide,
        '*': multiply
    };
 if (operation = '+')  {
     return x + y
 }

}


let cal_1 = calculator(38, 4, '+');
let cal_2 = calculator (45, 5, '/');

console.log(cal_1);
console.log(cal_2);*/



function calculator (x,y,o) {

    switch (o) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '/':
            return x / y;
            break;
        case '*':
            return x * y;
            break;
        default:
        return('entrer valid numbers');    
    
    
    
    }
}


let cal_1 = calculator (2,3, '+')



console.log(cal_1);

const personX = {
    name: "tav",
    age: 36
}

const personY = {
    name: "suzie",
    age: 30
}

function whoIsOlder(X,Y) {
    const personXIsOlder = X.age > Y.age;
    const resultpersonXIsOlder = X.name + " is older than " + Y.name + " by " + (X.age - Y.age) + " years. "
    const resultpersonYIsOlder = Y.name + " is older than " + X.name + " by " + (Y.age - X.age) + " years. "

    if (personXIsOlder === true) {
        return  resultpersonXIsOlder;
    } else {
        return resultpersonYIsOlder;
    }
    
}
console.log(whoIsOlder(personX, personY));