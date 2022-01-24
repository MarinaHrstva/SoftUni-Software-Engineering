function theImitationGamen(input) {
    let message = input.shift();
    input.forEach(line => {
        let [command, ...tokens] = line.split('|');
        if (command === 'ChangeAll') {
            message = changeAll(message, ...tokens)
        } else if (command === 'Insert') {
            message = insert(message, ...tokens)
        } else if (command === 'Move') {
            message = move(message, ...tokens);

        } 

    });
    
        console.log(`The decrypted message is: ${message}`)
    
    function changeAll(message, substring, replacement) {
        return message = message.replaceAll(new RegExp(`${substring}`, 'g'), replacement);
    }

    function insert(message, index, value) {
        index = Number(index);
        message = message.split('')
        message.splice(index, 0, value);
        return message.join('');
    }

    function move(message, n) {
        n = Number(n);
        message = message.split('')
        for (let i = 0; i < n; i++) {
            let element = message.shift();
            message.push(element);
        }
        return message.join('');
    }

}

theImitationGamen([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]

)

