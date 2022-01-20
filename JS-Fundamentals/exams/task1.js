function solve(input) {

    let text = input.shift();
    for (const line of input) {
        let [command, ...tokens] = line.split(' ');
        if (command === 'Make') {
            if (tokens[0] === 'Upper') {
                text = text.toUpperCase();
            } else {
                text = text.toLowerCase();
            }
            console.log(text);
        } else if (command === 'GetDomain') {
            let n = tokens[0];
            console.log(text.substring((text.length) - n));
        } else if (command === 'GetUsername') {
            let index = text.indexOf('@');
            if (index === -1) {
                console.log(`The email ${text} doesn't contain the @ symbol.`);
            } else {
                let substring = text.substring(0, index)
                console.log(substring);
            }

        } else if (command === 'Replace') {
            let regex = new RegExp(`${tokens[0]}`, 'g')
            text = text.replace(regex, '-')
            console.log(text);
        } else if (command === 'Encrypt') {
            let printLine = '';
            for (const a of text) {
                let n = a.charCodeAt();
                printLine += n + ' ';
            }
            console.log(printLine);
        }
    }
}

solve((["AnotherMail.com",
"Make Lower",
"GetUsername",
"Replace a",
"Complete"])

)