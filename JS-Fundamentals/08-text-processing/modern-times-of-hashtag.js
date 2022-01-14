function hashtag(text) {
    text = text.split(' ')

    for (const word of text) {
        if (word[0] === '#' && word.length > 1 && isOnlyLetters(word)) {
            let sub = word.substr(1)
            console.log(sub);
        }

    }

    function isOnlyLetters(word) {
        let isL = true
        for (let i = 1; i < word.length; i++) {
            if ((word[i].charCodeAt() < 65) || (word[i].charCodeAt() > 90 && word[i].charCodeAt < 97) || (word[i].charCodeAt() > 122)) {
                isL = false
            }
        }

        return isL
    }
}

hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign')