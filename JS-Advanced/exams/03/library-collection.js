class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];

    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.')
        } else {
            this.books.push({
                bookName,
                bookAuthor,
                payed: false
            })

            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }

    payBook(bookName) {
        let searchedBook = this.books.find(b => b.bookName == bookName);

        if (!searchedBook) {
            throw new Error(`${bookName} is not in the collection.`)
        } else if (searchedBook.payed) {
            throw new Error(`${bookName} has already been paid.`)
        } else {
            searchedBook.payed = true;
            return `${bookName} has been successfully paid.`
        }
    }

    removeBook(bookName) {
        let searchedBook = this.books.find(b => b.bookName == bookName);

        if (!searchedBook) {
            throw new Error(`The book, you're looking for, is not found.`)
        } else if (!searchedBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        } else {
            let index = this.books.indexOf(searchedBook);
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`
        }
    }

    /**
 */

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let result = [`The book collection has ${this.capacity - this.books.length} empty spots left.`]
            let sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach(b => {
                    result.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`)
                })

            return result.join('\n')
        } else {
            let searchedBook = this.books.find(b => b.bookAuthor == bookAuthor);
            if (searchedBook) {
                return `${searchedBook.bookName} == ${searchedBook.bookAuthor} - ${searchedBook.payed ? 'Has Paid' : 'Not Paid'}.`

            } else {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
        }
    }

}
const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));


// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());


// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));
