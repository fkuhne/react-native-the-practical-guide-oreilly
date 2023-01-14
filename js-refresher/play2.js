const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
// declarative functions:

function summarizeUser(userName, userAge, userHasHobbies) {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and has hobbies: ' + 
        userHasHobbies
    );
}
console.log(summarizeUser(name, age, hasHobbies));
