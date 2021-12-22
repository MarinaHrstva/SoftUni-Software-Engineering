function maxNumber(input) {
    let index = 0;
    let num = input[index];
    let max = num;

    while (num !== "Stop") {

        let tempNumber = Number(input[index]);

        if (tempNumber > num) {
            max = tempNumber;
        }
        num = input[index];
        index++;


    }

    console.log(Number(num))
}

maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
