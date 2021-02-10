function fibonacci(max) {
    return {
        [Symbol.iterator]: () => {
            let previous = 0;
            let current = 1;
            let nextNumber = previous + current;
            return {
                next() {
                    previous = current;
                    current = nextNumber;
                    nextNumber = previous + current;
                    if (current <= max) {
                        return {
                            value: current,
                            done: false
                        };
                    }
                    return {
                        value: undefined,
                        done: true
                    };
                }
            };
        }
    };
}

for (const n of fibonacci(10)) {
    console.log(n)
}

