function towns(input) {


    input.forEach(line => {
        let [town, latitude, longitude] = line.split(' | ');
        latitude=Number(latitude).toFixed(2);
        longitude=Number(longitude).toFixed(2);

        let townObj = {
            town,
            latitude,
            longitude
        }
        console.log(townObj);
    });

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)