function plus15Minutes(arg1, arg2) {
    let hour = Number(arg1);
    let min = Number(arg2) + 15;

    if (min >= 60) {
        hour = hour + 1;
        min = min - 60;
    }
    if (hour >= 24) {
        hour = hour - 24;
    }
    if (min <= 9) {
        console.log(`${hour}:0${min}`)
    } else {
        console.log(`${hour}:${min}`)
    }
}
plus15Minutes("1", "46")