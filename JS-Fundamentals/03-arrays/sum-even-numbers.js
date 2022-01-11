function sumEvenNumbers(arr) {
    let mapped = arr.map(Number)
    let sum=0;
    for (let num of mapped) {
        if(num%2===0){
            sum+=num
        }
    }

    return sum

}

sumEvenNumbers(['1', '2', '3', '4', '5', '6'])