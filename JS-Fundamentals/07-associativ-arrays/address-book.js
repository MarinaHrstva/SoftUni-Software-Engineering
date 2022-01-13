function addressBook(input) {

    let book = {}
    for (const line of input) {
        const [name, address] = line.split(':');
        book[name] = address;
    }

    let sorted=Object.keys(book)
    .sort((a,b)=>a.localeCompare(b))
    .forEach(element=>{
        console.log(`${element} -> ${book[element]}`);
    })
}


addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)