function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    let type = '';

    if (sum % 1 !== 0) {
        type = 'Float';
    } else {
        type = 'Integer';
    }

    console.log(`${sum} - ${type}`); 

}

integerAndFloat(1,2,3)