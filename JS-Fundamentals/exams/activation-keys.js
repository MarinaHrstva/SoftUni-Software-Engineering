function activationKey(input) {
    let key = input.shift();

    input.forEach(line => {
        let [command, ...tokens] = line.split('>>>');
        if (command != 'Generate') {
            if (command === 'Contains') {
                if (key.includes(...tokens)) {
                    console.log(`${key} contains ${tokens}`);
                } else {
                    console.log('Substring not found!');
                }
            } else if (command === 'Flip') {
                let upOrLow = tokens[0];
                let start = Number(tokens[1]);
                let end = Number(tokens[2]);
                key = key.split('');
                for (let i = start; i < end; i++) {
                    if (upOrLow === 'Upper') {
                        key[i] = key[i].toUpperCase()
                    } else {
                        key[i] = key[i].toLowerCase()
                    }
                }

                key = key.join('');
                console.log(key);

            }else if (command==='Slice') {
                key=key.split('');
               key.splice(tokens[0],tokens[1]-tokens[0]);
               key=key.join('');
               console.log(key);
            }
        }else{
            console.log(`Your activation key is: ${key}`);
        }
    });
}

activationKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]
)
