function tickets(arr, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = arr.map(x => {
        let [destination, price, status] = x.split('|');
        price = Number(price);
        let obj = new Ticket(destination, price, status);
        return obj
    });

    if (sorting === 'destination') {
        return result.sort((a, b) => (a.destination).localeCompare(b.destination))
    } else if (sorting === 'price') {
        return result.sort((a,b)=>a.price - b.price);
    } else {
        return result.sort((a, b) => (a.status).localeCompare(b.status));
    }

}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
)