function orders(product, quantity) {
    switch (product) {
        case 'coffee':
            return (quantity * 1.5).toFixed(2);
        case 'water':
            return (quantity * 1).toFixed(2);
        case 'coke':
            return (quantity * 1.4).toFixed(2);
        case 'snacks':
            return (quantity * 2).toFixed(2);

    }
}