function numberInRange(arg) {
    let num = Number(arg)

    if (num >= -100 && num <= 100 && num !== 0) {
        console.log("Yes");
    } else {
        console.log("No")
    }


}

numberInRange("-25")