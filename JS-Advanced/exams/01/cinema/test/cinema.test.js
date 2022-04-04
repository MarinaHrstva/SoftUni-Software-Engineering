let cinema = require('../cinema');
let { assert, expect } = require('chai')


describe('Cinema', () => {

    describe('Show movies', () => {
        it('Show Movies  <----->  empty array', () => {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.')
        })

        it('Show Movies  <----->  correct array', () => {
            assert.equal(cinema.showMovies(['Iron man', 'Spiderman', 'Superman']), 'Iron man, Spiderman, Superman')
        })

    })

    describe('ticketPrice', () => {

        it('ticketPrice  <----->  correct input', () => {
            assert.equal(cinema.ticketPrice('Premiere'), 12.00);
            assert.equal(cinema.ticketPrice('Normal'), 7.50);
            assert.equal(cinema.ticketPrice('Discount'), 5.50);
        })

        it('ticketPrice  <----->  incorrect input', () => {
            assert.throw(() => cinema.ticketPrice('abc'), Error, 'Invalid projection type.');
            assert.throw(() => cinema.ticketPrice(5), Error, 'Invalid projection type.');
            assert.throw(() => cinema.ticketPrice(), Error, 'Invalid projection type.');


        })

    })

    describe('swapSeatsInHall', () => {

        it('swapSeatsInHall  <----->  correct input', () => {
            assert.strictEqual(cinema.swapSeatsInHall(1,5), 'Successful change of seats in the hall.');
        })

        it('swapSeatsInHall  <----->  FIRST input-------STRING', () => {
            assert.strictEqual(cinema.swapSeatsInHall('A',5), 'Unsuccessful change of seats in the hall.');
        })

        it('swapSeatsInHall  <----->  SECOND input------STRING', () => {
            assert.strictEqual(cinema.swapSeatsInHall(5,'A'), 'Unsuccessful change of seats in the hall.');
        })

        it('swapSeatsInHall  <----->  FIRST input-------FLOATING POINT NUMBER', () => {
            assert.strictEqual(cinema.swapSeatsInHall(5.5,5), 'Unsuccessful change of seats in the hall.');
        })

        it('swapSeatsInHall  <----->  SECOND input------FLOATING POINT NUMBER', () => {
            assert.strictEqual(cinema.swapSeatsInHall(5,5.5), 'Unsuccessful change of seats in the hall.');
        })

        it('swapSeatsInHall  <----->  FIRST input-------LESS THAN 0', () => {
            assert.strictEqual(cinema.swapSeatsInHall(-5,5), 'Unsuccessful change of seats in the hall.');
        })

        it('swapSeatsInHall  <----->  SECOND input------LESS THAN 0', () => {
            assert.strictEqual(cinema.swapSeatsInHall(5,-5), 'Unsuccessful change of seats in the hall.');
        })
        
        it('swapSeatsInHall  <----->  FIRST input-------GREATER THAN 20', () => {
            assert.strictEqual(cinema.swapSeatsInHall(25,5), 'Unsuccessful change of seats in the hall.');
        })

        it('swapSeatsInHall  <----->  SECOND input------GREATER THAN 20', () => {
            assert.strictEqual(cinema.swapSeatsInHall(5,25), 'Unsuccessful change of seats in the hall.');
        })
        it('swapSeatsInHall  <----->  FIRST input-------0', () => {
            assert.strictEqual(cinema.swapSeatsInHall(0,5), 'Unsuccessful change of seats in the hall.');
        })

        it('swapSeatsInHall  <----->  SECOND input------0', () => {
            assert.strictEqual(cinema.swapSeatsInHall(5,0), 'Unsuccessful change of seats in the hall.');
        })
        it('swapSeatsInHall  <----->  FIRST input------ARRAY', () => {
            assert.strictEqual(cinema.swapSeatsInHall([5],10), 'Unsuccessful change of seats in the hall.');
        })
        it('swapSeatsInHall  <----->  SECOND input------ARRAY', () => {
            assert.strictEqual(cinema.swapSeatsInHall(5,[2]), 'Unsuccessful change of seats in the hall.');
        })

        it('swapSeatsInHall  <----->  WITH ONE PARAMETER', () => {
            assert.strictEqual(cinema.swapSeatsInHall(5), 'Unsuccessful change of seats in the hall.');
        })
        
        it('swapSeatsInHall  <----->  MISSING PARAMETER', () => {
            assert.strictEqual(cinema.swapSeatsInHall(), 'Unsuccessful change of seats in the hall.');
        })


        it('swapSeatsInHall  <----->  EQUAL PARAMETERS', () => {
            assert.strictEqual(cinema.swapSeatsInHall(5,5), 'Unsuccessful change of seats in the hall.');
        })
    })

})