function sumFirstAndLast(array) {
    let newArray = array.map(Number)

    return newArray.shift() + newArray.pop()
}

console.log(sumFirstAndLast(['20', '30', '40']))