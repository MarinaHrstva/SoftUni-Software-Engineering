function nxnMatrix(n) {

    let nToString = n + ' ';
    let line = nToString.repeat(n)
    let result = '';

    for (let i = 0; i < n; i++) {
        result += line + '\n';
    }

    return result;
}
console.log(nxnMatrix(7));