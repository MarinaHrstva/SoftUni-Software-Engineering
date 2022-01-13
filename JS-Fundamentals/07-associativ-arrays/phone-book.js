function phoneBook(input) {
    let phones = {}

    input.forEach(element => {
        const [name, num] = element.split(' ');
        phones[name] = num
    });
    for (const key in phones) {
        console.log(`${key} -> ${phones[key]}`);
    }
}


console.log(phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
))