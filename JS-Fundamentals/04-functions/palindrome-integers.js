function palindromeIntegers(array) {
    let output = '';
    for (let i = 0; i < array.length; i++) {
        let element = array[i] + '';
        let reversedElement = element.split('')
            .reverse()
            .join('');

        if (element === reversedElement) {
            output += 'true' + '\n';
        } else {
            output += `false` + '\n';
        }

    }

    return output;

}
console.log(palindromeIntegers([123, 323, 421, 121]))