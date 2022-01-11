function reverseAnArrayOfStrings(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let tempElement = arr[arr.length - 1 - i]
        let frontElement = arr[i]
        arr[arr.length - 1 - i] = frontElement
        arr[i] = tempElement
    }
    console.log(arr.join(' '));
}

console.log(reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']));