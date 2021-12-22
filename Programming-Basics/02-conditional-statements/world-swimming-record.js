function worldSwimmingRecord(arg1, arg2, arg3) {
    let worldRecord = Number(arg1);
    let distance = Number(arg2);
    let timeForMeter = Number(arg3);

    let timeWithouthDelay = distance * timeForMeter
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = timeWithouthDelay + delay;

    if (worldRecord > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else{
            console.log(`No, he failed! He was ${(totalTime - worldRecord).toFixed(2)} seconds slower.`);

    }



}
worldSwimmingRecord("10464",
    "1500",
    "20")
