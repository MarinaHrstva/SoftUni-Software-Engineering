function magicMatrices(matrix) {
    let isMagic = true;
    let rowSum = 0;
    let colSum = 0;

    for (let i = 0; i < matrix[0].length; i++) {
        let currentRowSum = 0;
        let currentColSum = 0;
        for (let j = 0; j < matrix[0].length; j++) {
            currentRowSum += matrix[i][j];
            currentColSum += matrix[j][i];
        }

        if (rowSum == 0) {
            rowSum = currentRowSum;
        }

        if (colSum == 0) {
            colSum = currentColSum;
        }

        if (colSum != currentColSum) {
            isMagic = false;
            break;
        }

        if (rowSum != currentRowSum) {
            isMagic = false;
            break;
        }
    }

    return isMagic;
}

console.log(
    magicMatrices([[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]
       
    )
);
