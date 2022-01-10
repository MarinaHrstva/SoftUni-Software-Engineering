function rightPlace(toReplace, char, toCompare) {
    let result = '';

    for (let i = 0; i < toReplace.length; i++) {
        if (toReplace[i] !== '_') {
            result += toReplace[i];
        } else {
            result += char;
        }

    }

    if (result === toCompare) {
        return 'Matched'
    } else {
        return 'Not Matched'
    }
}

console.log(rightPlace('Str_ng', 'I', 'Strong'));