function magicSum(array, num) {

    for (let i = 0; i < array.length; i++) {
        let output = [];
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === num) {
                output.push(array[i], array[j]);
            }

        }

        console.log(output.join(' '));
    }

}

magicSum([1, 2, 3, 4, 5, 6],
    6
    
)