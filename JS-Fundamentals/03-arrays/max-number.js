function maxNumber(numbers) {
    let topIntegers = [];

    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        let isTop = true;
        for (let j = i + 1; j < numbers.length; j++) {
            if (element <= numbers[j]) {
                isTop = false;
                break;
            }

        }

        if (isTop) {
            topIntegers.push(element);
        }

    }
    console.log(topIntegers.join(' '));
}
maxNumber([1, 4, 3, 2])



