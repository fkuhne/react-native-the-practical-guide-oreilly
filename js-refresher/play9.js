// asynchronous code

setTimeout(() => {
    console.log('Yow!!');
}, 1000);


// synchronous code
console.log('Hello');
console.log('World!');

// note that Hello and World appear BEFORE!!! Because they are executed
// SYNCHRONOUSLY!

// nested async calls:
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise FetchData is done!')
        }, 1500); 
    });
    return promise; // Note that this is a synchronous function, which
                    // means it will return right away, but the result
                    // of the promise will resolve later.
}

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
    });
}, 2000);

console.log('YAY')

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }).then(text2 => {
        console.log(text2);
    });
}, 2000);