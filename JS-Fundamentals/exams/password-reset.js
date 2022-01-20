function passwordReset(input) {
    let pass = input.shift();

    input.forEach(element => {
        let [command, ...tokens] = element.split(' ');
        if (command != 'Done') {
            if (command === 'TakeOdd') {
                pass = takeOdd(pass);
                console.log(pass);
            } else if (command === 'Cut') {
                pass = cut(pass, ...tokens);
                console.log(pass);
            }else if(command==='Substitute'){
             
                if (pass.includes(tokens[0])) {
                    pass=substitude(pass,...tokens);
                    console.log(pass);
                }else{
                    console.log('Nothing to replace!');
                }
                
            }

        }else{
            console.log(`Your password is: ${pass}`);
        }

    });

    function takeOdd(pass) {
        return pass.split('').filter((x, i) => i % 2 === 1).join('');
    }

    function cut(pass, index, length) {
        index=Number(index);
        length=Number(length);
        let sub = pass.substring(index, index + length);
        return pass.replace(sub, '');
    }

    function substitude(pass, substring, substitude) {
        let regex = new RegExp(`${substring}`, 'g');

        return pass.replace(regex, substitude);
    }

}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]
)