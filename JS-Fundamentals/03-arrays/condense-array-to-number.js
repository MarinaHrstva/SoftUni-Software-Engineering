function condenseArrayToNumber(numbers) {

    let condensed = []
    while (numbers.length > 1) {

        for (let i = 0; i < numbers.length; i++) {

            condensed.push(numbers[i] + numbers[i + 1])

        }
        numbers = condensed
        condensed = []
    }

    console.log(numbers);
}

condenseArrayToNumber([2, 10, 3])