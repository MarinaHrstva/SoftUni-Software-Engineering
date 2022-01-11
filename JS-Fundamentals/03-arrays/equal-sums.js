function equalSums(numbers) {

    let areEqual = false;
    for (let i = 0; i < numbers.length; i++) {
        let leftSum = 0;
        let rightSym = 0;
     
        for (let j = i - 1; j >= 0; j--) {
            leftSum += numbers[j];
        }

        for (let k = i + 1; k < numbers.length; k++) {
            rightSym += numbers[k];
        }

        if (leftSum === rightSym) {
            console.log(i);
            areEqual = true;
        }
    }
    if (!areEqual) {
        console.log('no');
    }
}

equalSums([1])