function amazingNumber(n) {
    n = '' + n;
    let sum = 0;
    let isAmazing = false;
    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }

    sum = '' + sum
    for (let i = 0; i < sum.length; i++) {
        if (Number(sum[i] )=== 9) {
            isAmazing = true;
            break;
        }

    }
    if(isAmazing){
        console.log(`${n} Amazing? True`);
    }else{
        console.log(`${n} Amazing? False`);
    }
}

amazingNumber(1233)