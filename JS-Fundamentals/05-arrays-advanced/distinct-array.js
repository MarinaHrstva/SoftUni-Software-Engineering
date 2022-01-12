function distinctArray(array) {

    let printLine = []

    for (const el of array) {
        if (!printLine.includes(el)) {
            printLine.push(el);
        }

    }

console.log(printLine.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])