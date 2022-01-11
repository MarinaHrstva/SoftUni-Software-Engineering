function addAndSubtract(arr) {
    let output = [];
    let originalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        originalSum += arr[i];
        if (arr[i] % 2 === 0) {
            output.push(arr[i] + i);
        } else {
            output.push(arr[i] - i);
        }

    }
    let modifiedSum = output.reduce((a,b)=>a+b);


    console.log(output);
    console.log(originalSum);
    console.log(modifiedSum);
}
// [ 5, 14, 21, 59, 31 ]
addAndSubtract([5, 15, 23, 56, 35])