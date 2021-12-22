function operationsBetweenNumbers(arg1, arg2, arg3) {

    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let operator = arg3;

    let result = 0;
    let evenOrOdd = 0;

    switch (operator) {
        case "+":
            result = n1 + n2; break;
        case "-":
            result = n1 - n2; break;
        case "*":
            result = n1 * n2; break;
        case "/":
            result = n1 / n2; break;
        case "%":
            result = n1 % n2; break;
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        if (result % 2 == 0) {
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (operator === "/") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} / ${n2} = ${(result).toFixed(2)}`);
        }
    } else {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} % ${n2} = ${result}`);
        }
    }


}

operationsBetweenNumbers("10",
    "12",
    "+")
