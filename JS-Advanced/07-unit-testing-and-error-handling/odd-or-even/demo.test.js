const isOddOrEven = require('./demo');
const { assert, expect } = require('chai');


describe('Test isOddOrEven function', () => {
    

    it('test with odd', () => {
        expect(isOddOrEven('Hello')).to.equal('odd')

    })
    it('test with even', () => {
        expect(isOddOrEven('Hi')).to.equal('even')

    })
    it('test with non-string type', () => {
        expect(isOddOrEven(5)).to.be.undefined

    })
   

})