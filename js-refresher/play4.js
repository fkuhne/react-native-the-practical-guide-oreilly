// objects!

const person = {
    name: 'Max',
    age: 29,
    hasaHobbies: true,
    greet() {
        console.log('Hi, I am ' + this.name + '.');
    }
};

// note that inside the object I have to declare greet as a function (not arrow function)
//  so that the this keyword is correctly resolved.
console.log(person);
person.greet();