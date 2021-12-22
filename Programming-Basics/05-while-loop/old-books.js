function oldBooks(arg) {

    let index = 0;
    let aniBook = arg[index]
    index++;
    let currentBook = arg[index];
    let bookCounter = 0;
    let bookIsFound = false;

    while (currentBook !== "No More Books") {
      
        if (currentBook === aniBook) {
            console.log(`You checked ${bookCounter} books and found it.`)
            bookIsFound = true;
            break;
        }
        bookCounter++;
        index++;
        currentBook = arg[index];
    }
    if (bookIsFound === false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`)
    }
}

oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])


