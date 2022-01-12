function employees(input) {
    input.forEach(line => {
        let person= {
            name: line,
            id:line.length
        }
        console.log(`Name: ${person.name} -- Personal Number: ${person.id}`);
    });

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)