function charactersInRange(a, b) {
    let start = a.charCodeAt()
    let end = b.charCodeAt()

    let output = '';
    if (end < start) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start + 1; i < end; i++) {
        output += String.fromCharCode(i) + ' ';
    }
    return output;

}
console.log(charactersInRange('a', 'd'))