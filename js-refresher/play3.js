const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
// function expressions:

const summarizeUser = function(userName, userAge, userHasHobbies) {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and has hobbies: ' + 
        userHasHobbies
    );
}

// arrow functions:

const summarizeUserArrow = (userName, userAge, userHasHobbies) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and has hobbies: ' + 
        userHasHobbies
    );
}

console.log(summarizeUserArrow(name, age, hasHobbies));

// beware that, with arrow functions, the 'this' keyword doesn't resolve 
//  for the local scope of the object or function, but for the global scope
//  of the node executable.


const adder = (a,b) => {
    return a + b;
}

// shorter ways of writing functions:

const shortAdder = (a, b) => a + b;

const addOne = a => a + 1;
