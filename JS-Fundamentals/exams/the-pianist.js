function pianist(input) {
    let n = Number(input.shift());
    let pieces = {};
    let piecesArr=input.splice(0,n).forEach(element=>{
        let [piece, composer, key] = element.split('|');
        pieces[piece] = { composer, key }
    })
   

    for (const line of input) {
        let [command, ...tokens] = line.split('|')
        if (command === 'Add') {
            if (pieces.hasOwnProperty(tokens[0])) {
                console.log(`${tokens[0]} is already in the collection!`);
            } else {
                let piece = tokens[0];
                let composer = tokens[1];
                let key = tokens[2];
                pieces[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }

        } else if (command === 'Remove') {
            let piece = tokens[0];
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (command === 'ChangeKey') {
            let piece = tokens[0];
            let key = tokens[1];
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = key;
                console.log(`Changed the key of ${piece} to ${key}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        }

    }

    let sorted = Object.keys(pieces).sort((a, b) => a.localeCompare(b)
        || (pieces[a].composer).localeCompare(pieces[b].composer))
        .forEach(element => {
            console.log(`${element} -> Composer: ${pieces[element]['composer']}, Key: ${pieces[element].key}`);
        })

}

pianist(
    [
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
      ]
         
)