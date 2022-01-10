function printAndSum(start, end) {
    // Write a function to display numbers from given start to given end and their sum. The input comes as two number parameters.
    let printLine = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        printLine += i + " ";
        sum += i;
    }
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)