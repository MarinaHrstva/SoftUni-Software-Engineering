function sortingNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers.shift());
        result.push(numbers.pop());
    }
    result.push(numbers.shift());
    result.push(numbers.pop());
    return result;
}
[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
