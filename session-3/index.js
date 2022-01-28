// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14



let a = 5;
const b = 10;

var c = a + b;

console.log(c);

var d = a - b;

console.log(d);

var e = b / a;

console.log(e)



function sayHey() {
    console.log("Hey!");
}

function conversation() {
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}

conversation();


function futureAge(name, age) {
    
    const a = age + 5;
    console.log("Hi " + name + "!" + " You will be " + a ,"years old in 5 years time.")

}

futureAge("Suzi", 30)
futureAge("Tavia", 36)