function convertToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }

    let parsed=JSON.stringify(person)
    console.log(parsed);
}

convertToJSON('George',
    'Jones',
    'Brown'
)