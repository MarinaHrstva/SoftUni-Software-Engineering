function rounding(x, y) {
    if (y > 15) {
        y = 15
    }

    let result=x.toFixed(y)
    console.log(parseFloat(result));
}

rounding(3.1415926535897932384626433832795, 2)