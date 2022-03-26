const createCalculator = require('./demo');
const { assert, expect } = require('chai');


describe('Test createCalculator function', () => {
    let instance = null;
    beforeEach(() => { instance = createCalculator() })

    it('has all methods', () => {
        expect(instance).has.ownProperty('add');
        expect(instance).has.ownProperty('subtract');
        expect(instance).has.ownProperty('get');

    })


    it('Adds number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    })

    it('Subtracts number', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    })

    it('Adds number as a string', () => {
        instance.add('1');
        expect(instance.get()).to.equal(1);
    })

    it('Subtracts number as a string', () => {
        instance.subtract('1');
        expect(instance.get()).to.equal(-1);
    })

})