function matchPhoneNumber(text) {
    let pattern = /\+\b359([ ,-])2\1\d{3}\1\d{4}\b/g;
    let matches = pattern.exec(text);
    let result = [];

    while (matches != null) {
        result.push(matches[0]);
        matches = pattern.exec(text);
    }
    console.log(result.join(', '));

}

matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")