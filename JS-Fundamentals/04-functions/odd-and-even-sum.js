function oddAndEvenSum(n) {
    n = n + '';
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < n.length; i++) {
        let currentNumber = Number(n[i]);
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }

    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`

}

console.log(oddAndEvenSum(1000435));