function storeProvision(stoke, ordered) {
    let shop = {};

    addToShop(ordered, addToShop(stoke, shop))

    function addToShop(array, shop) {
        for (let i = 0; i < array.length; i += 2) {

            let product = array[i]
            let quantity = Number(array[i + 1]);
            if (!shop.hasOwnProperty(product)) {
                shop[product] = 0
            }
            shop[product] += quantity
        }

        return shop

    }
    
    for (const key in shop) {
        console.log(`${key} -> ${shop[key]}`);

    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)