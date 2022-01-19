function numbers(input) {
    let numbersArray = input.split(' ').map(Number);

    let average = numbersArray.reduce((a, b) => a + b) / numbersArray.length
    numbersArray = numbersArray.filter(x => x > average);
    let output = numbersArray.sort((a, b) => b - a)
        .splice(0, 5)
        .join(' ');

    console.log(output ? output : 'No');

}

numbers('1')
//30, 40, 50, 50, 60, 60, 51
//60 60 51 50 50