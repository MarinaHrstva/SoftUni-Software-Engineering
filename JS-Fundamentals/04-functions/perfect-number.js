function perfectNumber(n) {
    let divisors = []

    for (let i = n - 1; i > 0; i--) {
        if (n % i == 0) {
            divisors.push(i);
        }
    }
    let sum = divisors.reduce((a, b) => a + b);

    if(sum===n){
        return 'We have a perfect number!'
    }else{
        return "It's not so perfect.";
    }

}

console.log(perfectNumber(28));

