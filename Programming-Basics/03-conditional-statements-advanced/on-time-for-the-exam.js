function onTimeForTheExam(arg1, arg2, arg3, arg4) {

    let examHour = Number(arg1);
    let examMIn = Number(arg2);
    let studentHour = Number(arg3);
    let studentMin = Number(arg4);

    let allExamMins = (examHour * 60) + examMIn;
    let allStudentMins = (studentHour * 60) + studentMin;
    let early = allExamMins - allStudentMins;
    // подраняването
    let late = allStudentMins - allExamMins;
    //закъснението


    if (early >= 0 && early < 10) {
        console.log("On time");
        console.log(`${early} minutes before the start`)
    } else if (early >= 10 && early <= 30) {
        console.log("On time");
        console.log(`${early} minutes before the start`)
    } else if (early > 30 && early < 60) {
        console.log("Early");
        console.log(`${early} minutes before the start`)
    } else if (early >= 60) {
        let hour = Math.floor(early / 60);
        let mins = early % 60;
        if (mins < 10 && mins >= 0) {
            console.log("Early");
            console.log(`${hour}:0${mins} hours before the start`);
        } else if (mins > 10) {
            console.log("Early");
            console.log(`${hour}:${mins} hours before the start`);
        }
    } else if (allExamMins = allStudentMins) {
        console.log("On time");
    }
    if (late >= 0 && late < 60) {
        console.log("Late")
        console.log(`${late} minutes after the start`)
    } else if (late >= 60)  {
        let hour = Math.floor(late / 60);
        let mins = late % 60;
        if (mins < 10 && mins >= 0) {
            console.log("Late");
            console.log(`${hour}:0${mins} hours after the start`);
        } else if (mins > 10) {
            console.log("Late");
            console.log(`${hour}:${mins} hours after the start`);
        }
 
}

}


onTimeForTheExam ("9","30","9","50")
