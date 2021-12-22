function factorial(arg1) {

    let num = Number(arg1);
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    console.log(fact);
}
factorial("4")