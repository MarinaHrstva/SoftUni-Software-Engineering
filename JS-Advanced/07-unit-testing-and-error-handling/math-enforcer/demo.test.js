const mathEnforcer = require('./demo');
const { assert, expect } = require('chai');


describe('Test mathEnforcer function', () => {

    describe('Test addFive function', () => {
        it('Test with a string', () => {
            assert(mathEnforcer.addFive('Hello') == undefined);
        })
        it('Test with an array', () => {
            assert(mathEnforcer.addFive(['Hello']) == undefined);
        })
        it('Test with an object', () => {
            assert(mathEnforcer.addFive({}) == undefined);
        })

        it('Test with a number', () => {
            assert(mathEnforcer.addFive(5), 10);
        })

        it('Test with a number', () => {
            assert(mathEnforcer.addFive(-3), 2);
        })

    })

    describe('Test subtractTen function', () => {
        it('Test with a string', () => {
            assert(mathEnforcer.subtractTen('Hello') == undefined);
        })
        it('Test with an array', () => {
            assert(mathEnforcer.subtractTen(['Hello']) == undefined);
        })
        it('Test with an object', () => {
            assert(mathEnforcer.subtractTen({}) == undefined);
        })

        // it('Test with a number', () => {
        //     assert(mathEnforcer.subtractTen(10),0);
        // })
        it('Test with a number', () => {
            assert(mathEnforcer.subtractTen(20), 10);
        })
        it('Test with a number', () => {
            assert(mathEnforcer.subtractTen(5), -5);
        })
        it('Test with a number', () => {
            assert(mathEnforcer.subtractTen(-5), -15);
        })


    })

    describe('Test sum function', () => {
     
        it('Test with a string as a first parameter', () => {
            assert(mathEnforcer.sum('Hello', 5) == undefined);
        })
        it('Test with a string as a second parameter', () => {
            assert(mathEnforcer.sum(5, 'Hello') == undefined);
        })

        it('Test with two number parameters', () => {
            assert(mathEnforcer.sum(5, 5),10);
        })

})