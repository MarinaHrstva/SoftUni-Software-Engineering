const lookupChar = require('./demo');
const { assert, expect } = require('chai');


describe('Test lookupChar function', () => {

    it('test all correct data', () => {
        assert(lookupChar('Hello', 5),'o')
    })
    it('test all correct data', () => {
        assert(lookupChar('H', 0),'H')
    })
    it('test with empty string', () => {
        assert(lookupChar('', 0),undefined)
    })

    it('test with index<0', () => {
        expect(lookupChar('Hello', -1)).to.equal('Incorrect index')
    })
    it('test with length<index', () => {
        expect(lookupChar('Hello', 6)).to.equal('Incorrect index')
    })
   

    it('test with floating-point number as index', () => {
        expect(lookupChar('Hello', 5.5)).to.be.undefined
    })
    it('test with non-string type', () => {
        expect(lookupChar(55555, 2)).to.be.undefined
    })
    it('test with non-string type', () => {
        expect(lookupChar([], 5)).to.be.undefined
    })
    it('test with non-integer index', () => {
        expect(lookupChar('Hello', '5')).to.be.undefined
    })

})