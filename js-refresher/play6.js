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