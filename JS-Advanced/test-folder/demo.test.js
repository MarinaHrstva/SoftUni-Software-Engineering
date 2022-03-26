const createCalculator = require('./demo');
const { assert, expect} = require('chai');

	
describe('Test createCalculator function', () => {
  
    it('test with white',()=>{
        expect(createCalculator(255,255,255)).to.equal('#FFFFFF');
    })

    
    
    
})