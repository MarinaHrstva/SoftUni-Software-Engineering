function histogram(arg1) {
    let text = arg1;

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for (let i = 1; i < text.length; i++) {
        if (Number(text[i]) < 200) {
            p1Count++;
        } else if (Number(text[i]) >= 200 && Number(text[i]) <= 399) {
            p2Count++
        } else if (Number(text[i]) >= 400 && (Number(text[i])) <= 599) {
            p3Count++
        } else if (Number(text[i]) >= 600 && (Number(text[i])) <= 799) {
            p4Count++
        } else {
            p5Count++
        }
    }
    let p1Percent = (p1Count / (text.length - 1)) * 100;
    let p2Percent = (p2Count / (text.length - 1)) * 100;
    let p3Percent = (p3Count / (text.length - 1)) * 100;
    let p4Percent = (p4Count / (text.length - 1)) * 100;
    let p5Percent = (p5Count / (text.length - 1)) * 100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"])
