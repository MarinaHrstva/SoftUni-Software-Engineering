function catalogue(input) {

    let products = {};

    input.forEach(element => {
        let [product, price] = element.split(' : ');
        price = Number(price);
        let char = product[0];
        if (!products[char]) {
            products[char] = {};
        }

        products[char][product] = price;

    });

    let sorted = Object.keys(products).sort((a, b) => a.localeCompare(b))

    for (const key of sorted) {
        console.log(key);
        let line = Object.keys(products[key])
        .sort((a, b) => a.localeCompare(b))
        .forEach(element=>{
            console.log(`${element}: ${products[key][element]}`);
        })

    }

}

catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])