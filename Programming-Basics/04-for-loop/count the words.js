function countTheWords(arg) {
    let text = arg;
    let spaces = 0;


    for (i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            spaces++
        }
    }
    let words = spaces + 1;

    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`)
    } else {
        console.log("The message was send successfully!")
    }

}
countTheWords("This message has ten words and you can send it!")