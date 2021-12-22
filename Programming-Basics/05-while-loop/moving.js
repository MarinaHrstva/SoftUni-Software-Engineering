function moving(arg) {
    let index = 0
    let w = Number(arg[index])
    index++
    let l = Number(arg[index])
    index++
    let h = Number(arg[index]);
    index++
    let freeSpace = w * l * h
    let sumBoxes = 0
    let command = arg[index++];

    while (command !== "Done") {
        let currentBox = Number(command)
        sumBoxes += currentBox


        if (sumBoxes >= freeSpace) {
            console.log(`No more free space! You need ${sumBoxes - freeSpace} Cubic meters more.`);
            break;
        }

        command = arg[index++];

    }



    if (command === "Done") {
        console.log(`${freeSpace - sumBoxes} Cubic meters left.`)
    }


}

moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])
