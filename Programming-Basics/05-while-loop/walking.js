function walking(arg) {

    let stepsTarget = 10000;
    let stepsPerDay = 0;
    
    for (i = 0; i < arg.length; i++) {
        let currentSteps = arg[i];
        if (currentSteps === "Going home") {
       
        } else {
            stepsPerDay += Number(currentSteps);
        }
    }
    
    if (stepsPerDay >= stepsTarget) {
        console.log(`Goal reached! Good job!`)
        console.log(`${stepsPerDay - stepsTarget} steps over the goal!`)
    } else {
        console.log(`${stepsTarget - stepsPerDay} more steps to reach goal.`);
    }
}
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])







// let index = 0;
// let stepsPerDay = 0;
// let currentSteps = arg[index];
// index++;

// while (currentSteps !== "Going home") {
//     stepsPerDay += Number(currentSteps);
 
//     currentSteps = arg[index];
//     index++;

// }
// if (stepsPerDay >= 10000) {
//     console.log(`Goal reached! Good job!`);
//     console.log(`${stepsPerDay - 10000} steps over the goal!`);
//     // break;
// }

// ielse (stepsPerDay < 10000) {
//     console.log(`${10000 - stepsPerDay} more steps to reach goal.`)
// }