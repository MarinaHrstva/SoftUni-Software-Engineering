function fancyBarcodes(input) {
    input.shift()
    let regex = /(@#+)(?<name>[A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/
    input.forEach(element => {
        if (regex.test(element)) {
            element = element.split('').filter(char => !isNaN(char))
            if (element.length) {
                console.log(`Product group: ${element.join('')}`);
            } else {
                console.log('Product group: 00');
            }
        }else{
            console.log(`Invalid barcode`);
        }
    });
}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]
)