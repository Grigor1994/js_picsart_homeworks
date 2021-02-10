function* fibonacci(max) {
    let previous = 0;
    let current = 1;
    let nextNumber = previous + current;
    while (true) {
        previous = current;
        current = nextNumber;
        nextNumber = previous + current;
        if (current > max) {
            break;
        }
        yield current;
    }
}

for(const n of fibonacci(10)){
    console.log(n);
}