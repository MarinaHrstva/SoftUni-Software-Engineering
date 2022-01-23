function gcd(a, b) {
    let end = 0;
    let gcdN = 1;
    if (a > b) {
        end = a;
    } else {
        end = b;
    }

    for (let i = 1; i <= end; i++) {
        if (a % i === 0 && b % i === 0) {
            gcdN = i;
        }
    }

    console.log(gcdN);
}

gcd(9, 72)