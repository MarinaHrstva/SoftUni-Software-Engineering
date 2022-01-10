function triplesOfLatinLetters(n) {

    for (let i = 0; i < n; i++) {
        let printLine = '';
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                printLine += String.fromCharCode(97 + i)
                printLine += String.fromCharCode(97 + j)
                printLine += String.fromCharCode(97 + k)
                console.log(printLine);
                printLine = ''
            }
        }

    }

}
triplesOfLatinLetters(3)