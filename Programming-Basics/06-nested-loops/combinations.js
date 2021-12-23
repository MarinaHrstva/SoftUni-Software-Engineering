function combinations(input) {
    let index = 0;
    let number = Number(input[index])
    let counter = 0;
    // let result=0;

    for (x = 0; x <= number; x++) {
        for (y = 0; y <= number; y++) {
            for (z = 0; z <= number; z++) {
           let result=x+y+z
                // console.log(`${x} ${y} ${z}`)
                if (result === number) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}
combinations(["25"])