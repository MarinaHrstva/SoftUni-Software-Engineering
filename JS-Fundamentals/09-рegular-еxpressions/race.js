function race(input) {
    let racers = {};
    input.shift().split(', ').forEach(element => {
        racers[element] = 0;
    });

    input.forEach(line => {
        let patternAZ = /[A-Za-z]/g;
        let name = line.match(patternAZ).join('');
        if (racers.hasOwnProperty(name)) {
            let patternD = /[\d]/g;
            let km = line.match(patternD)
                .map(Number)
                .reduce((a, b) => a + b);
            racers[name] += km;
        }

    });

    let sorted = Object.keys(racers)
        .sort((a, b) => racers[b] - racers[a]);
    return `1st place: ${sorted[0]}
2nd place: ${sorted[1]}
3rd place: ${sorted[2]}
`
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])