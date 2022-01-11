function repeatText(text, count) {
    let result = '';

    for (let i = 0; i < count; i++) {
        result += text;
    }
    return result;

}
repeatText('abc', 3)