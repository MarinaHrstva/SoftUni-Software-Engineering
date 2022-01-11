function evenAndOddSubtraction(arr) {
    let oddSum = 0;
    let evenSum = 0;

    for (const num of arr) {
        if (Number(num) % 2 === 0) {
            evenSum += Number(num)
        } else (oddSum += Number(num))

    }


    console.log(evenSum - oddSum);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6])