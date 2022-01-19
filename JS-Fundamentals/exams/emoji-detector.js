function emojiDetector(input) {
    let regex = /\d/
    let num = input[0].split('')
        .filter(x => regex.test(x))
        .map(Number)
        .reduce((a, b) => a * b, 1)

    console.log(`Cool threshold: ${num}`);

    let regex2 = /((::)|(\*\*))[A-Z]{1,}[a-z]{2,}\1/g
    let emojies = input[0]
        .match(regex2)

    console.log(`${emojies.length} emojis found in the text. The cool ones are:`);

    let coolEmoji = {}
    emojies.forEach(element => {
        let sum = 0;
        let name = element.slice(2, element.length - 2)
        for (const char of name) {
            let n = char.charCodeAt();
            sum += n;
        }
        if (sum >= num) {
            coolEmoji[element] = sum;
        }

    }
    );

    for (const key in coolEmoji) {
        console.log(key);
    }

}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])