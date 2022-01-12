function searchForANumber(arr1, arr2) {

    let [a, b, c] = arr2;

    let array = arr1.splice(0, a);
    array.splice(0, b);
    let filtered = array.filter(a => a === c)

    console.log(`Number ${c} occurs ${filtered.length} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)

