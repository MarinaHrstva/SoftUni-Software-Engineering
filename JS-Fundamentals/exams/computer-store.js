function computerStore(input) {
    let clientType = input.pop();
    input = input.map(Number);
    let price = 0;

    for (let line of input) {
        if (line < 0) {
            console.log('Invalid price!');
        } else {
            price += line;
        }
    }


    let taxes = price * 0.2;
    let total = price + taxes;
    if (clientType === 'special') {
        total *= 0.9;
    }

 if (total===0) {
     console.log('Invalid order!');
 }else{
     console.log(template(price,taxes,total));
 }

    function template(price, taxes, total) {
        let template = `Congratulations you've just bought a new computer!
    Price without taxes: ${price.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${total.toFixed(2)}$`

        return template
    }
}

computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
)