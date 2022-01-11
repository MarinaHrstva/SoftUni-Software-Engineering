function reverseAnArrayOfNumbers(n, arr) {

    return arr.slice(0, n)
        .reverse()
        .join(' ')

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])