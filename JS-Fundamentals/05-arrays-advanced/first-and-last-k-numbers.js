function firstAndLastKNumbers(array) {
    let k = array.shift();
    let first = array.slice(0,k)
    let last = array.slice(-k)

    console.log(first.join(' '));
    console.log(last.join(' '));
}
console.log(firstAndLastKNumbers([2, 7, 8, 9]));