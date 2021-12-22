function minNumber(arg) {
    let min = Number(arg[1]);

    for (let i = 1; i < arg.length; i++){
        let tempNumber = Number(arg[i])

    if (tempNumber < min) {
        min = tempNumber
    }
 }
 
 
 console.log(min)
}

minNumber(["4",
    "45",
    "-20",
    "7",
    "99"])
