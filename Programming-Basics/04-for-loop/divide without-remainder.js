function divideWithoutRemainder(arg) {

    let text = arg;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i < text.length; i++) {
        if (Number(text[i]) % 2 === 0) {
            p1++;
        }
        if (Number(text[i]) % 3 === 0) {
            p2++;
        }
        if (Number(text[i]) % 4 === 0) {
            p3++;
        }
    }

    // let p1Percent = (p1Count / (text.length - 1)) * 100;
    let p1Percent = (p1 / (text.length - 1)) * 100;
    let p2Percent = (p2 / (text.length - 1)) * 100;
    let p3Percent = (p3 / (text.length - 1)) * 100;

    console.log(`${p1Percent.toFixed(2)}%`)
    console.log(`${p2Percent.toFixed(2)}%`)
    console.log(`${p3Percent.toFixed(2)}%`)

}

divideWithoutRemainder(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"])
