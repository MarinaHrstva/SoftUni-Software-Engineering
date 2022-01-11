function loadingBar(n) {

    let printLine = '';
    let num=n/10;

    if (n === 100) {
        printLine += '100% Complete!';
    } else {
        printLine = `${n}% [${'%'.repeat(num)}${'.'.repeat(10 - num)}]\nStill loading...`;
    }

    return printLine
}

console.log(loadingBar(30))

// 30% [%%%.......]
// Still loading...
