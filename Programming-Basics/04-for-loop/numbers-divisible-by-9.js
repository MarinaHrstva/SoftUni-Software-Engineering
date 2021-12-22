function numbersDivisibleBy9(arg1, arg2) {
    let numA = Number(arg1);
    let numB = Number(arg2);
    let result = 0;

    for (let i = numA; i <= numB; i++) {
        if (i % 9 === 0) {
            result += i;
        }
    }
    console.log(`The sum: ${result}`)

    for (let i = numA; i <= numB; i++) {
        if (i % 9 === 0) {
            result += i;
            console.log(i);
        }

    }


}

numbersDivisibleBy9("100", "200")