// objects!

const person = {
    name: 'Max',
    age: 29,
    hasaHobbies: true,
    greet() {
        console.log('Hi, I am ' + this.name + '.');
    }
};

const hobbies = [
    'Sports', 'Cooking', 1, true
];


hobbies.push('Programming');
console.log(hobbies);

const copiedArray = hobbies.slice();
console.log(copiedArray);

// spread operator
const newArray = [...hobbies];
console.log(newArray);

const copiedPerson = {...person};
console.log(copiedPerson);

// rest syntax - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
const toArray = (...args) => {
    return args
}

console.log(toArray(1,2,3))
console.log(toArray(1,2,3,4,5,6,7,8,9,10))