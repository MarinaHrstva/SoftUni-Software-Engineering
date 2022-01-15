function solve(input) {
    let regex = /(=|\/)(?<name>[A-Z]{1}[A-Za-z]{2,})\1/g

    let match = input.match(regex);
    let dest = []
    let points = 0;
    if (match!=null) {
        for (const line of match) {
            let piece = line.substring(1, line.length - 1)
            dest.push(piece)
            points += piece.length;
        }
    }

    console.log(`Destinations: ${dest.join(', ')}`);
    console.log(`Travel Points: ${points ? points : '0'}`);

}


solve(("ThisIs some InvalidInput"))