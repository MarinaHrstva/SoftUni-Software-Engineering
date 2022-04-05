let rentCar = require('./rentCar');
let { assert, expect } = require('chai');


describe('rentCAr', () => {

    describe('searchCar', () => {
        it('Whit correct input', () => {
            assert.strictEqual(rentCar.searchCar(["Volkswagen", "BMW", "Audi", 'Audi'], 'Audi'), `There is 2 car of model Audi in the catalog!`)
            assert.strictEqual(rentCar.searchCar(['Audi'], 'Audi'), `There is 1 car of model Audi in the catalog!`)
            assert.strictEqual(rentCar.searchCar(['Audi', 'BMW'], 'Audi'), `There is 1 car of model Audi in the catalog!`)

        })

        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----ARRAY', () => {
            assert.throw(() => rentCar.searchCar('Audi', ['Audi', 'BMW']), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----NUMBER', () => {
            assert.throw(() => rentCar.searchCar('Audi', 5), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----NUMBER, SECOND----STRING', () => {
            assert.throw(() => rentCar.searchCar(5, 'Audi'), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----ARRAY', () => {
            assert.throw(() => rentCar.searchCar(['Audi', 'BMW'], ['Audi']), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----STRING', () => {
            assert.throw(() => rentCar.searchCar('Audi', 'Audi'), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----0, SECOND----0', () => {
            assert.throw(() => rentCar.searchCar(0, 0), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----MISSING', () => {
            assert.throw(() => rentCar.searchCar(['Audi', 'BMW']), Error, 'Invalid input!');
        })


        it('Whit incorrect input<--------> SHOP DOES NOT CONTAIN SEARCHED CAR', () => {
            assert.throw(() => rentCar.searchCar(['Audi', 'BMW'], 'Lada'), Error, 'There are no such models in the catalog!');
        })

    })

    describe('calculatePriceOfCar', () => {

        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----MISSING', () => {
            assert.throw(() => rentCar.calculatePriceOfCar(['Audi', 'BMW']), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----STRING', () => {
            assert.throw(() => rentCar.calculatePriceOfCar(['Audi', 'BMW'], '5'), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----STRING', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('BMW', '5'), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----FLOATING POINT NUMBER', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('BMW', 5.5), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----NUMBER, SECOND----NUMBER', () => {
            assert.throw(() => rentCar.calculatePriceOfCar(5, 5), Error, 'Invalid input!');
        })


        it('Whit incorrect input<--------> MISSING MODEL IN CATALOGUE', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('Lada', 5), Error, 'No such model in the catalog!');
        })


        it('Whit correct input', () => {
            assert.strictEqual(rentCar.calculatePriceOfCar('Audi', 2), `You choose Audi and it will cost $72!`)
            assert.strictEqual(rentCar.calculatePriceOfCar('Volkswagen', 3), `You choose Volkswagen and it will cost $60!`)
            assert.strictEqual(rentCar.calculatePriceOfCar('Toyota', 4), `You choose Toyota and it will cost $160!`)
            assert.strictEqual(rentCar.calculatePriceOfCar('BMW', 5), `You choose BMW and it will cost $225!`)
            assert.strictEqual(rentCar.calculatePriceOfCar('Mercedes', 6), `You choose Mercedes and it will cost $300!`)

        })

    })

    describe('checkBudget', () => {

        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----NUMBER, THIRD----NUMBER', () => {
            assert.throw(() => rentCar.checkBudget('50', 5, 300), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----NUMBER, SECOND----STRING, THIRD----NUMBER', () => {
            assert.throw(() => rentCar.checkBudget(50, '5', 300), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----NUMBER, SECOND----NUMBER, THIRD----STRING', () => {
            assert.throw(() => rentCar.checkBudget(50, 5, '300'), Error, 'Invalid input!');
        })

        it('Whit incorrect input<--------> FIRST PARAMETER----FLOATING POINT NUMBER, SECOND----NUMBER, THIRD----NUMBER', () => {
            assert.throw(() => rentCar.checkBudget(50.5, 5, 300), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----NUMBER, SECOND----FLOATING POINT NUMBER, THIRD----NUMBER', () => {
            assert.throw(() => rentCar.checkBudget(50, 5.5, 300), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----NUMBER, SECOND----NUMBER, THIRD----FLOATING POINT NUMBER', () => {
            assert.throw(() => rentCar.checkBudget(50, 5, 300.5), Error, 'Invalid input!');
        })

        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----NUMBER, THIRD----NUMBER', () => {
            assert.throw(() => rentCar.checkBudget([50], 5, 300), Error, 'Invalid input!');
        })

        it('Whit incorrect input<--------> FIRST PARAMETER----0, SECOND----0, THIRD----FLOATING POINT 0', () => {
            assert.throw(() => rentCar.checkBudget(50, 5, 300.5), Error, 'Invalid input!');
        })

        it('Whit incorrect input<--------> MISSING PARAMETERS', () => {
            assert.throw(() => rentCar.checkBudget(), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> MISSING ONE PARAMETER', () => {
            assert.throw(() => rentCar.checkBudget(50,5), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> MISSING TWO PARAMETERS', () => {
            assert.throw(() => rentCar.checkBudget(50), Error, 'Invalid input!');
        })

        it('Whit correct input', () => {
            assert.strictEqual(rentCar.checkBudget(50, 4, 200), `You rent a car!`)
            assert.strictEqual(rentCar.checkBudget(40, 4, 200), `You rent a car!`)
        })

        it('Whit correct input BUT WHIT LESS BUDGET', () => {
            assert.strictEqual(rentCar.checkBudget(50, 4, 100), `You need a bigger budget!`)
            assert.strictEqual(rentCar.checkBudget(40, 4, 150), `You need a bigger budget!`)
        })

    })

})

