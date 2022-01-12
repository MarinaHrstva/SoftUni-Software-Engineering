function city(input) {
    let keys = Object.keys(input)

    for (let key of keys) {
        console.log(`${key} -> ${input[key]}`);
    }

}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)