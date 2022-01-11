function factorialDivision(a, b) {

    function factorial(n) {
        let factorial = [];

        for (let i = n; i > 0; i--) {
            factorial.push(i)
        }

        return factorial.reduce((a, b) => a * b)
    }

    let division = ((a, b) => a / b);

    return division(factorial(a),factorial(b)).toFixed(2)
}

console.log(factorialDivision(5, 2));

