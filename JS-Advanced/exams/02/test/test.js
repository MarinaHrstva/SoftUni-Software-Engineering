let bookSelection = require('./rentCar');
let { assert, expect } = require('chai');


describe('rentCAr', () => {

    describe('bookSelection', () => {
        it('Whit correct input', () => {
            assert.strictEqual(bookSelection.isGenreSuitable("Thriller", 13), `Those books are suitable`)
            assert.strictEqual(bookSelection.isGenreSuitable("Horror", 13), `Those books are suitable`)
            assert.strictEqual(bookSelection.isGenreSuitable("str", 12), `Those books are suitable`)
            assert.strictEqual(bookSelection.isGenreSuitable("str", 11), `Those books are suitable`)

        })

        it('Whit INCORRECT input', () => {
            assert.strictEqual(bookSelection.isGenreSuitable("Thriller", 12), `Books with Thriller genre are not suitable for kids at 12 age`)
            assert.strictEqual(bookSelection.isGenreSuitable("Horror", 12), `Books with Horror genre are not suitable for kids at 12 age`)
            assert.strictEqual(bookSelection.isGenreSuitable("Thriller", 11), `Books with Thriller genre are not suitable for kids at 11 age`)
            assert.strictEqual(bookSelection.isGenreSuitable("Horror", 11), `Books with Horror genre are not suitable for kids at 11 age`)
            assert.strictEqual(bookSelection.isGenreSuitable("Thriller", 0), `Books with Thriller genre are not suitable for kids at 0 age`)
            assert.strictEqual(bookSelection.isGenreSuitable("Horror", 0), `Books with Horror genre are not suitable for kids at 0 age`)

        })

    })

    describe('isItAffordable', () => {
        it('Whit correct input', () => {
            assert.strictEqual(bookSelection.isItAffordable(5, 10), `Book bought. You have 5$ left`)
            assert.strictEqual(bookSelection.isItAffordable(0, 0), `Book bought. You have 0$ left`)
            assert.strictEqual(bookSelection.isItAffordable(10, 5), `You don't have enough money`)

        })



        it('isItAffordable  <----->  incorrect input ----STRING NUMBER', () => {
            assert.throw(() => bookSelection.isItAffordable('5', 10), Error, 'Invalid input');
        })

        it('isItAffordable  <----->  incorrect input ----NUMBER STRING ', () => {
            assert.throw(() => bookSelection.isItAffordable(5, '10'), Error, 'Invalid input');
        })
        it('isItAffordable  <----->  incorrect input ----ARRAY NUMBER ', () => {
            assert.throw(() => bookSelection.isItAffordable([5], 10), Error, 'Invalid input');
        })

        it('isItAffordable  <----->  incorrect input ----NUMBER ARRAY  ', () => {
            assert.throw(() => bookSelection.isItAffordable(5, [10]), Error, 'Invalid input');
        })


    })

    /**
*•	

*/

    describe('suitableTitles', () => {
        it('Whit correct input', () => {
        assert.deepEqual(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Book1", genre: "Thriller" }], "Thriller"),['The Da Vinci Code', 'Book1'])
        })

        it('suitableTitles  <----->  incorrect input', () => {
            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Book1", genre: "Thriller" }], 10), Error, 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles('book', '10'), Error, 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles('book', 10), Error, 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles({}, 'STRING'), Error, 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Book1", genre: "Thriller" }], [10]), Error, 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Book1", genre: "Thriller" }],undefined), Error, 'Invalid input');
            
        })

    })

})

