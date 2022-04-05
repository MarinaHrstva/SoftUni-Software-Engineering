let flowerShop = require('./flowerShop');
let { assert, expect } = require('chai');

describe('flowerShop', () => {

    describe('searchCar', () => {
        it('Whit correct input', () => {
            assert.strictEqual(flowerShop.searchCar(["Volkswagen", "BMW", "Audi", 'Audi'], 'Audi'), `There is 2 car of model Audi in the catalog!`)
            assert.strictEqual(flowerShop.searchCar(['Audi'], 'Audi'), `There is 1 car of model Audi in the catalog!`)
            assert.strictEqual(flowerShop.searchCar(['Audi', 'BMW'], 'Audi'), `There is 1 car of model Audi in the catalog!`)

        })

        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----ARRAY', () => {
            assert.throw(() => flowerShop.searchCar('Audi', ['Audi', 'BMW']), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----NUMBER', () => {
            assert.throw(() => flowerShop.searchCar('Audi', 5), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----NUMBER, SECOND----STRING', () => {
            assert.throw(() => flowerShop.searchCar(5, 'Audi'), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----ARRAY', () => {
            assert.throw(() => flowerShop.searchCar(['Audi', 'BMW'], ['Audi']), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----STRING', () => {
            assert.throw(() => flowerShop.searchCar('Audi', 'Audi'), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----0, SECOND----0', () => {
            assert.throw(() => flowerShop.searchCar(0, 0), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----MISSING', () => {
            assert.throw(() => flowerShop.searchCar(['Audi', 'BMW']), Error, 'Invalid input!');
        })


        it('Whit incorrect input<--------> SHOP DOES NOT CONTAIN SEARCHED CAR', () => {
            assert.throw(() => flowerShop.searchCar(['Audi', 'BMW'], 'Lada'), Error, 'There are no such models in the catalog!');
        })

    })

})
