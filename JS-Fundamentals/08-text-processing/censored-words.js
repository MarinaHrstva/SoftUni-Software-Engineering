function censoredWords(text, word) {
    let censored = '*'.repeat(word.length)



    while (text.includes(word)) {
        text = text.replace(word, censored)
    }

    console.log(text);
}

censoredWords("A small sentence with some words", "small")