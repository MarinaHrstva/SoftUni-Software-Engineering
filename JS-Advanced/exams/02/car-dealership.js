class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        if (!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!')
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        })

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let searchedCar = this.availableCars.find(c => c.model == model);
        let diff = searchedCar.mileage - desiredMileage;

        if (!searchedCar) {
            throw new Error(`${model} was not found!`)
        }

        if (diff <= 40000) {
            searchedCar.price *= 0.95;
        } else if (diff > 40000) {
            searchedCar.price *= 0.90;
        }

        this.soldCars.push({
            model,
            horsepower: searchedCar.horsepower,
            soldPrice: searchedCar.price
        })
        let soldPrice = searchedCar.price
        this.totalIncome += soldPrice

        let searchedCarIndex = this.availableCars.indexOf(searchedCar);
        this.availableCars.splice(searchedCarIndex, 1);

        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length < 1) {
            return `There are no available cars`
        }
        let result = ['-Available cars:'];

        this.availableCars.forEach(c => {
            result.push(`${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`)
        })

        return result.join('\n');

    }

    /**
salesReport (criteria) – This method accepts 1 argument.  It should sort the sold cars, based on a given criterion.
 The two possible criteria are – "horsepower" or "model"

•	If the given criteria is "horsepower" – the sold cars must be sorted by their horsepower in descending order;
•	If the given criteria is "model" – the sold cars must be sorted alphabetically by their model;
•	Finally, return all sorted sold cars separated by a new line in format:
"-{dealershipName} has a total income of {totalIncome}$
-{soldCarsCount} cars sold:
---{model} - {horsepower} HP - {price}$
---{model} - {horsepower} HP - {price}$"
…
Note: totalIncome and price must be rounded to the second decimal point!

*/

    salesReport(criteria) {

        // if (criteria != 'horsepower' || criteria != 'model') {
        //     throw new Error('Invalid criteria!');
        // }

        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);


        } else if (criteria == 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
        this.soldCars.map(c => {
            `---${c.model} - ${c.horsepower} HP - ${(c.soldPrice).toFixed(2)}$`
        })
        this.soldCars.unshift(`-${this.soldCars.length} cars sold:`);
        this.soldCars.unshift(`-${this.name} has a total income of ${(this.totalIncome).toFixed(2)}$`);
        return this.soldCars.join('\n');
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));
