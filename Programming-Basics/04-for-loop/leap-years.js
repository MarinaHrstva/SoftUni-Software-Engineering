function leapYears(arg1, arg2) {
    let firstYear = Number(arg1);
    let finalYear = Number(arg2);

    for (let i = firstYear; i <= finalYear; i += 4) {
        console.log(i)
    }


}

leapYears("1908",
    "1919")
