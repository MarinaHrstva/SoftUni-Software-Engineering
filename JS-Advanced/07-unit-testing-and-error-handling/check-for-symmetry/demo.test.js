const isSymmetric = require('./demo');
const { assert, expect} = require('chai');

	// Take an array as argument
	// Return false for any input that isn’t of the correct type
	// Return true if the input array is symmetric
	// Otherwise, return false


describe('test isSymmetric function', () => {
  
    it('test with symmetric array',()=>{
        assert(isSymmetric([1,2,2,1])==true)
    })
    it('test with symmetric array',()=>{
        assert(isSymmetric([1,2,1])==true)
    })

    
    it('test with non-symmetric array',()=>{
        assert(isSymmetric([1,2,1,1])==false)
    })

    it('test with non-symmetric array',()=>{
        assert(isSymmetric([1,2,'1'])==false)
    })

    it('test with string',()=>{
        assert(isSymmetric('Hello')==false)
    })

    it('test with number',()=>{
        assert(isSymmetric(5)==false)
    })

    it('test with empty array',()=>{
        assert(isSymmetric([])==true)
    })

    it('test an array with length 1',()=>{
        assert(isSymmetric([1])==true)
    })
    
})