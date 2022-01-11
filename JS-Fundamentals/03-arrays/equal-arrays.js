function equalArrays(arr1, arr2) {
    let mapped1 = arr1.map(Number);
    let mapped2 = arr2.map(Number);
    let areIdentical = true;
    let indexOfDiff = '';

    for (let i = 0; i < mapped1.length; i++) {
        if (mapped1[i] != mapped2[i]) {
            areIdentical = false;
            indexOfDiff = i;
            break;
        }

    }
if(areIdentical){
    console.log(`Arrays are identical. Sum: ${mapped1.reduce((a,b)=>a+b)}`);
}else{
    console.log(`Arrays are not identical. Found difference at ${indexOfDiff} index`);
}

}

equalArrays(['10', '20', '30'], ['10', '20', '30'])