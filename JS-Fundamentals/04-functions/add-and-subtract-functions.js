function sumAndSubtract(a, b, c) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let result = subtract(sum(a, b),c)


    return result
}
console.log(sumAndSubtract(23, 6, 10))