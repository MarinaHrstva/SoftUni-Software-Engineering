function worldTour(input) {
    let text = input.shift();

    input.forEach(element => {
        let [command, ...tokens] = element.split(':');
        if (command === 'Add Stop') {
            let index = Number(tokens[0]);
            let string = tokens[1];
            if (index >= 0 && index < text.length) {
                let first = text.substring(0, index);
                let second = text.substring(index)
                text = first + string + second
                
            }
            console.log(text);
        } else if (command === 'Remove Stop') {
            let startIndex = tokens[0];
            let endIndex = tokens[1];
            if ((startIndex >= 0 && startIndex < text.length) && (endIndex >= 0 && endIndex < text.length) ) {
                let first = text.substring(0, startIndex);
                endIndex++
                let second = text.substring(endIndex);
                text = first + second;
               
            }
            console.log(text);
        } else if (command === 'Switch') {
            let oldStr = tokens[0];
            let newStr = tokens[1];
            text = text.replace(new RegExp(`${oldStr}`, 'g'), newStr);
            console.log(text);
        }

    });

    console.log(`Ready for world tour! Planned stops: ${text}`);

}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
