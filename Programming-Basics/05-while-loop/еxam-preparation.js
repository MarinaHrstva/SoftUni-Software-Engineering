function examPreparation(arg) {

    let index = 0;
    let limitBadGrades = arg[index];
    index++
    let badGrades = 0;
    let gradesCount = 0;
    let lastProblem = 0;
    let gradesSum = 0;


    let problem = arg[index];
    index++;
    let grade = Number(arg[index]);
    index++

    while (problem !== "Enough") {
        if (grade <= 4) {
            badGrades++
        }

        if (badGrades >= limitBadGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        }
        gradesCount++;
        lastProblem = problem;
        gradesSum += grade;
        problem = arg[index];
        index++;
        grade = Number(arg[index]);
        index++;


    }


    let averageGrade = gradesSum / gradesCount;

    if (problem === "Enough") {
        console.log(`Average score: ${(averageGrade).toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`)
        console.log(`Last problem: ${lastProblem}`)
    }

}

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])

