function simpluCalculator(a, b, operator) {
    // Write a function that receives three parameters
    // and write an arrow function that calculate result depending of operator.
    // Operator can be 'multiply', 'divide', 'add', 'subtract'. 
    switch (operator) {
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        case 'add':
            return a + b
        case 'subtract':
            return a - b;

    }
}


console.log(simpluCalculator(2, 3, 'multiply'))
