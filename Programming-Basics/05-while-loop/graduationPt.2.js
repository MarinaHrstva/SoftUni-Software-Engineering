function graduationPt2(arg) {
    let studentName = arg[0];
    let index = 1
    let yearGrade = Number(arg[index]);


    let currentClass = 0;
    let gradesCount = 0;
    let gradesSum = 0;
    let badGrades = 0;


    while (currentClass <= 12) {
        yearGrade = Number(arg[index]);
        gradesCount++
        gradesSum += yearGrade;
       

        if (yearGrade < 4) {
            badGrades++
        }

        if (badGrades > 1) {
            console.log(`${studentName} has been excluded at ${currentClass} grade`);
            break;
        }
        currentClass++
        
        if (currentClass === 12) {
            console.log(`${studentName} graduated. Average grade: ${(gradesSum / gradesCount).toFixed(2)}`)
        }

        index++
    }


}
graduationPt2(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])


