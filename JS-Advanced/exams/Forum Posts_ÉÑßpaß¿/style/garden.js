class Garden {

    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error(`Not enough space in the garden.`);
        }

        let searchedPlant = this.plants.find(p => p.plantName == plantName)
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        })


        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }

        let searchedPlant = this.plants.find(p => p.plantName == plantName);

        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (searchedPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        searchedPlant.ripe = true;
        searchedPlant.quantity += quantity;
        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }

    }

    harvestPlant(plantName) {
        let searchedPlant = this.plants.find(p => p.plantName == plantName);

        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (!searchedPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)

        }

        this.storage.push({
            plantName: searchedPlant.plantName,
            quantity: searchedPlant.quantity
        })

        this.spaceAvailable += searchedPlant.spaceRequired;
        let index = this.plants.indexOf(searchedPlant);
        this.plants.splice(index, 1);

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let result = [`The garden has ${this.spaceAvailable} free space left.`]
        let plants = 'Plants in the garden: '
        let sorted = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))

        for (const plant of sorted) {
            plants += `${plant.plantName}, `
        }
        let lastIndex = plants.lastIndexOf(',');
        plants = plants.slice(0, lastIndex);
        result.push(plants);

        let thirdLine = 'Plants in storage: '

        if (this.storage.length == 0) {
            thirdLine += `The storage is empty.`
        } else {
            for (const obj of this.storage) {
                thirdLine += `${obj.plantName} (${obj.quantity}), `
            }
        }

        let lIndex = thirdLine.lastIndexOf(',');
        thirdLine = thirdLine.slice(0, lIndex);
        result.push(thirdLine);
        return result.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());


// The apple has been successfully planted in the garden.

// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)


