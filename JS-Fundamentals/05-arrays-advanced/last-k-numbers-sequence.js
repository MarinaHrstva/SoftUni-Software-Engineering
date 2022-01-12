function lastKNumbersSequence(n, k) {
    let output = [1];

    for (let i = 0; i < n-1; i++) {
        let element = 0;
        for (let j = 0; j < k; j++) {
            let index = i - j;
            if (index < 0) {
                break;
            }
            element += output[index];
        }

        output.push(element);
    }

    console.log(output.join(' '));
}
lastKNumbersSequence(6, 3)