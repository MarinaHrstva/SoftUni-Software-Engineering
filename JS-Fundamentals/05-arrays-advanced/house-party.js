function houseParty(array) {
    let list = [];
    for (let line of array) {
        let [name, is, going] = line.split(' ');
        if (going === 'going!') {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        } else {
            if (!list.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                list = list.filter(el => el != name)
            }

        }

    }

    console.log(list.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)