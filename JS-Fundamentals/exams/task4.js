function solve(input) {
    let bands = {};

    for (const line of input) {
        let [command, ...tokens] = line.split('; ')
        if (command === 'Add') {
            let band = tokens[0];
            let members = tokens[1].split(', ');
            if (!bands.hasOwnProperty(band)) {
                bands[band] = { members };
            } else {
                if (!bands[band].hasOwnProperty('members')) {
                    bands[band]['members'] = members;
                } else {
                    members.forEach(element => {
                        if (!bands[band]['members'].includes(element)) {
                            !bands[band]['members'].push(element);
                        }
                    });
                }


            }
        } else if (command === 'Play') {
            let band = tokens[0];
            let times = Number(tokens[1]);

            if (bands.hasOwnProperty(band)) {
                if (bands[band].hasOwnProperty('times')) {
                    bands[band]['times'] += times
                } else {
                    bands[band]['times'] = times
                }
            } else {
                bands[band] = { times }
            }

        }
    }

    let sum = 0;
    for (const key in bands) {
        sum += bands[key]['times']
    }
    console.log(`Total time: ${sum}`);

    let sorted = Object.keys(bands).sort((a, b) => bands[b]['times'] - bands[a]['times'] ||
        (a).localeCompare(b))
    sorted.forEach(element => {
        console.log(`${element} -> ${bands[element]['times']}`);
    })


    console.log(`${sorted[0]}`);
    bands[sorted[0]]['members'].forEach(element => {
        console.log(`=> ${element}`);
    })

}

solve(["Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr",
"Play; The Beatles; 1",
"Play; The Beatles; 1",
"Play; Queen; 1",
"Add; Queen; Freddie Mercury, Brian May, Roger Taylor, John Deacon",
"Play; Queen; 1",
"Start!"])


