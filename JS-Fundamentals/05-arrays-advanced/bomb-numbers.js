function bombNumbers(input1, input2) {
    let sequence = [...input1];
    let [bombNum, power] = input2;

    while (sequence.includes(bombNum)) {
        let start = sequence.indexOf(bombNum) - power
        let deleteCount = power*2 + 1

        if (start < 0) {
            start = 0;
        }
        sequence.splice(start, deleteCount);

    }

    console.log(sequence.reduce((a, b) => a + b));
// console.log(sequence);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    
)