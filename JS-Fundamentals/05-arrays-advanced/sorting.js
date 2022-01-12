function sorting(numbers) {
    let output = []

    let acsending = [...numbers].sort((a, b) => a - b);
    let desending = [...numbers].sort((a, b) => b - a);

    for (let i = 0; i < numbers.length / 2; i++) {
        output.push(desending[i]);
        output.push(acsending[i]);
    }

    console.log(output.join(' '));
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47,15])