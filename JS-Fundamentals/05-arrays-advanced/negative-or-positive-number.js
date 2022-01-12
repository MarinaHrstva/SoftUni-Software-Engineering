function negativeOrPositiveNumber(array) {
    let output = [];

    for (const num of array) {
        if (num < 0) {
            output.unshift(num);
        } else {
            output.push(num);
        }
    }
    return output.join('\n');

}
console.log(negativeOrPositiveNumber([7, -2, 8, 9]))