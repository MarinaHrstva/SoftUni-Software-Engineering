function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let num = '' + i
        let isSpecial = false;
        let sum = 0;

        for (let j = 0; j < num.length; j++) {
            sum += Number(num[j])
        }

        if (sum === 5 || sum === 7 || sum == 11) {
            isSpecial = true
        }

        if (isSpecial) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }

}

specialNumbers(15)