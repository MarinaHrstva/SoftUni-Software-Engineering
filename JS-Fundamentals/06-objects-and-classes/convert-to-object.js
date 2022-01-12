function convertToObject(input){
    let converted=JSON.parse(input);

    for (let key in converted) {
        console.log(`${key}: ${converted[key]}`);
    }

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')