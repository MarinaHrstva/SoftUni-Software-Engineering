function sumNumbers(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let currentNumber = Number(input[index]);
    let total = 0;

    while (total < n) {
        currentNumber = Number(input[index])
        total += currentNumber;
        index++
    }

    console.log(total)
}
sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])
