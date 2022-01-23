function sameNumbers(num) {
    num += ''
    let sum = 0
    let areSame = true;

    for (let i = 0; i < num.length; i++) {
        if (num[i] != num[i + 1] && i != num.length - 1) {
            areSame = false;
        }
        sum += Number(num[i])
    }

    console.log(areSame);
    console.log(sum);
}

console.log(sameNumbers(2222222));