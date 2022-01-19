function memoryGame(input) {

    let sequence = input.shift().split(' ');
    let counter = 0;

    for (let line of input) {
        
  
        if (line === 'end' || sequence.length === 0) {
            break;

        }
        counter++;
        let [firstIndex, secondIndex] = line.split(' ');
        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);
        if (firstIndex === secondIndex ||
            secondIndex < 0 ||
            firstIndex < 0 ||
            secondIndex > sequence.length - 1 ||
            firstIndex > sequence.length - 1) {
            let element = `-${counter}` + 'a'
            let start = sequence.length / 2
            sequence.splice(start, 0, element, element)
            console.log('Invalid input! Adding additional elements to the board');
        } else if (sequence[firstIndex] == sequence[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`);
            sequence.splice(firstIndex, 1);
            let start = secondIndex - 1
            if (start < 0) {
                start = 0
            }
            sequence.splice(start, 1);
        } else if (sequence[firstIndex] != sequence[secondIndex]) {
            console.log('Try again!');
        }

    }

    if (sequence.length > 0) {
        console.log('Sorry you lose :(');
        console.log(sequence.join(' '));
    } else {
        console.log(`You have won in ${counter} turns!`);
    }

}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
)
/**
 * Congrats! You have found matching elements - 1!
Invalid input! Adding additional elements to the board
Congrats! You have found matching elements - 2!
Congrats! You have found matching elements - 3!
Congrats! You have found matching elements - -1a!
Sorry you lose :(
4 4 5 5

 */