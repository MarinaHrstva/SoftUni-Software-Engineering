const rgbToHexColor = require('./demo');
const { assert, expect} = require('chai');

	// Take an array as argument
	// Return false for any input that isn’t of the correct type
	// Return true if the input array is symmetric
	// Otherwise, return false


describe('Test rgbToHexColor function', () => {
  
    it('test with white',()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    })

    it('test with black',()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    })

    it('test with negative red number',()=>{
        expect(rgbToHexColor(-1,255,255)).to.be.undefined;
    })

    it('test with negative green number',()=>{
        expect(rgbToHexColor(255,-1,255)).to.be.undefined;
    })

    it('test with negative green number',()=>{
        expect(rgbToHexColor(255,-1,255)).to.be.undefined;
    })

    it('test with missing number',()=>{
        expect(rgbToHexColor(255,255)).to.be.undefined;
    })

    it('test with bigger number',()=>{
        expect(rgbToHexColor(255,255,256)).to.be.undefined;
    })
    
    
})