// ****************************************************TASK 1****************************************************


const animals = ['cat', 'dog', 'wolf', 'lion', 'eagle', 'zebra'];

animals.pop();

console.log(animals)
// deletes the last item in the array











// ****************************************************TASK 2****************************************************

const names = ['neo', 'pablo', 'pacho', 'amado', 'spike', 'jonas', 'arkin', 'charles', 'logan', 'jin'];

names.sort().reverse();

console.log(names)

//sorts the list in alphabetical order but reverses the list.

const figures = ['5', '325', '67', '100000', '150'];

figures.sort((a,b)=>a-b);

console.log(figures)





// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
 
];

people.sort(function(a,b) {
  return a.age - b.age;
})

function orderNamesMap() {
  return people
    .map((person) => person.name)
}
console.log('for loop', orderNamesMap())


// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement

