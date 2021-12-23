function trainTheTrainers(input) {
    let index = 0;
    let juryCount = Number(input[index++]);
    let sumAllGrades = 0;
    let command = input[index++];
    let gradesCounter = 0;


    while (command !== "Finish") {
        let prasentationName = command;
        let currentGrade = 0;
        for (let i = 0; i < juryCount; i++) {
            let tempgrade = Number(input[index++]);
            currentGrade += tempgrade;
            sumAllGrades += tempgrade;
            gradesCounter++;
        }
        console.log(`${prasentationName} - ${(currentGrade / juryCount).toFixed(2)}.`);
        command = input[index++];
        currentGrade = 0;
    }
    console.log(`Student's final assessment is ${(sumAllGrades / gradesCounter).toFixed(2)}.`)
}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
