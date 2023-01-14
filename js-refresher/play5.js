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

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies);