function sumOfTwoNumbers(input) {
    let index = 0;
    let startNumber = Number(input[index]);
    index++;
    let endNumber = Number(input[index]);
    index++;
    let magicNumber = Number(input[index]);
    let combinationCounter = 0;
    let flag = false;

    for (let x = startNumber; x <= endNumber; x++) {
        for (let y = startNumber; y <= endNumber; y++) {
            combinationCounter++
            if (x + y == magicNumber) {
                console.log(`Combination N:${combinationCounter} (${x} + ${y} = ${magicNumber})`);
                flag = true;
                break;
            }
        }
        if(flag){
            break;
        }
    }
    if (!flag){
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`)
    }



}
sumOfTwoNumbers(["1",
    "10",
    "5"])
