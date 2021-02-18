function fibonacci() {
    const cash = new Map();

    return function(number) {
        const result =[];

        if (cash.has(number)) {

            return cash.get(number);
        }
        function *generateFibonacci () {
            let firstNumber = 0;
            let nextNumber = 1;

            for (let index = 0; index <= number; index++) {

                yield firstNumber;
                const sum = firstNumber + nextNumber;
                firstNumber = nextNumber;
                nextNumber = sum;
            }
        }
        const generator = generateFibonacci();
        for (const value of generator){
            result.push(value);
        }
        cash.set(number, result);

        return result;
    };
}

const fib = fibonacci();
