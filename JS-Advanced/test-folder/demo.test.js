const mathEnforcer = require('./demo');
const { assert, expect } = require('chai');

describe('Test addFive function', () => {
    it('Test with a string', () => {
        assert(mathEnforcer.addFive('Hello') == undefined);
    })

})