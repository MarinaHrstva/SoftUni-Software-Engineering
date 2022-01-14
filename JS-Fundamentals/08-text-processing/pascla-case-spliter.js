function pascalCaseSpliter(str) {
    let result = [];
    let upperIndex = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            let word = str.substring(upperIndex, i);
            result.push(word);
            upperIndex = i;
        }
    }
    result.push(str.substring(upperIndex))
    console.log(result.join(', '));

}

pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan')