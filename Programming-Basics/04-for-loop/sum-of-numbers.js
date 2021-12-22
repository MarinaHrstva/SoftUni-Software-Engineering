function sumOfNumbers(arg1) {
    let num = "" + arg1;
    let result = 0;

    
    for (let i = 0; i < num.length; i++) {
        let n = Number(num[i]);
        result += n;
    }

    console.log(`The sum of the digits is:${result}`)


}

sumOfNumbers("1234")