// callback version
function showSum(sum) {
    console.log(sum);
}

function calculateTwoSum(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

calculateTwoSum(4, 5, showSum);


// promisify version
function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (error, data) => {
                if (error) return reject(error);
                resolve(data);
            });
        });
    }
}

let calculateSumWithPromise = promisify(calculateTwoSum);
calculateSumWithPromise(4, 5).then(data => console.log(data))
    .catch(error => console.log(error));