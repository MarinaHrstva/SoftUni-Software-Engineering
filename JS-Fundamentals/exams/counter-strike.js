function counterStrike(input) {

    let energy = Number(input.shift());
    let enemies = 0

    for (let line of input) {

        if (energy < line) {
            console.log(`Not enough energy! Game ends with ${enemies} won battles and ${energy} energy`);
            break;
        } else if (line === 'End of battle') {
            console.log(`Won battles: ${enemies}. Energy left: ${energy}`);
            break;
        } else {
            enemies++;
            energy -= Number(line);
        }

        if (enemies % 3 === 0) {
            energy += enemies;
        }

    }

}

counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]

)