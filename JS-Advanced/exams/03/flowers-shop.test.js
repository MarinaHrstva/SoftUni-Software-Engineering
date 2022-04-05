let flowerShop = require('./flowers-shop');
let { assert, expect } = require('chai');

describe('flowerShop', () => {

    describe('calcPriceOfFlowers', () => {
        it('Whit correct input', () => {
            assert.strictEqual(flowerShop.calcPriceOfFlowers('rose', 5, 5), `You need $25.00 to buy rose!`)

        })

        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----NUMBER, THIRD----STRING', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 5, '5'), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----STRING, THIRD----STRING', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', '5', '5'), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----NUMBER, SECOND----STRING, THIRD----STRING', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(5, '5', '5'), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----NUMBER, SECOND----STRING, THIRD----NUMBER', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(5, '5', 5), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----NUMBER, SECOND----NUMBER, THIRD----NUMBER', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(5, 5, 5), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----0, SECOND----0, THIRD----0', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(0, 0, 0), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----ARRAY, THIRD----ARRAY', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(['rose'], [5], [3]), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----NUMBER, THIRD----NUMBER', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(['rose'], 5, 3), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----ARRAY, THIRD----NUMBER', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', [5], 3), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----FLOATING POINT NUMBER, THIRD----NUMBER', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 5.5, 3), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----NUMBER, THIRD----FLOATING POINT NUMBER', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 5, 3.5), Error, 'Invalid input!');
        })
    })

    describe('checkFlowersAvailable', () => {
        it('Whit CORRECT flower', () => {
            assert.strictEqual(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"]), `The Rose are available!`);
            assert.strictEqual(flowerShop.checkFlowersAvailable("Lily", ["Rose", "Lily", "Orchid"]), `The Lily are available!`);
            assert.strictEqual(flowerShop.checkFlowersAvailable("Orchid", ["Rose", "Lily", "Orchid"]), `The Orchid are available!`);

        })

        it('Whit INCORRECT FLOWER', () => {
            assert.strictEqual(flowerShop.checkFlowersAvailable("Orchid", ["Rose", "Lily",]), `The Orchid are sold! You need to purchase more!`);
            assert.strictEqual(flowerShop.checkFlowersAvailable("Rose", ["Lily", "Orchid"]), `The Rose are sold! You need to purchase more!`);
            assert.strictEqual(flowerShop.checkFlowersAvailable("Lily", ["Rose", "Orchid"]), `The Lily are sold! You need to purchase more!`);

        })
    })

    describe('sellFlowers', () => {
        it('Whit CORRECT flower', () => {
            assert.strictEqual(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1), `Rose / Orchid`);
            assert.strictEqual(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],0), `Lily / Orchid`);
            assert.strictEqual(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],2), `Rose / Lily`);
        })

        it('Whit incorrect input<--------> FIRST PARAMETER----STRING, SECOND----NUMBER', () => {
            assert.throw(() => flowerShop.sellFlowers(`"Rose", "Lily", "Orchid"`, 1), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----NEGATIVE NUMBER', () => {
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----FLOATING POINT NUMBER', () => {
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1.5), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----NUMBER GREATER THAN ARRAY.LENGTH', () => {
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4), Error, 'Invalid input!');
        })
        it('Whit incorrect input<--------> FIRST PARAMETER----ARRAY, SECOND----NUMBER EQUAL TO ARRAY.LENGTH', () => {
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4), Error, 'Invalid input!');
        })
    })
})
