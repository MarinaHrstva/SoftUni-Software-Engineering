function solve(input) {
    let text = input.shift().split('');

    for (const line of input) {
        let [command, ...tokens] = line.split('|');
        if (command === 'ChangeAll') {

            let substring = tokens[0];
            let replacement = tokens[1];
            text = text.join()
                .split(substring)
                .join(`${replacement}`)
                .split(',')

        } if (command === 'Insert') {
            let index = Number(tokens[0]);
            let value = tokens[1];
            text.splice(index, 0, value);
        } if (command === 'Move') {
            let count = Number(tokens[0]);
            let piece = text.splice(0, count);
            text.push(...piece);
        } if (command === 'Decode') {
            text = text.join('')
            console.log(`The decrypted message is: ${text}`);

        }
    }
}

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  
)