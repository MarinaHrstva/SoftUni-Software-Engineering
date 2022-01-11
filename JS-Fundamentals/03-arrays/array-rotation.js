function arrayRotation(arr, n) {
    if (n >= arr.length) {
        n = n % arr.length;
    }

    for (let i = 0; i < n; i++) {
        let element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(' '));
}

arrayRotation([2, 4, 15, 31], 5)
// 4 15 31 2