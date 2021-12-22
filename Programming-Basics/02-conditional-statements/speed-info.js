function speedInfo(arg1) {
    let speed = Number(arg1);
    if (speed <= 10) {
        console.log("slow");
    } else if (speed <= 50) {
        console.log("average");

    } else if (speed <= 150) {
        console.log("fast");
    } else if (speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast")
    }
}


speedInfo("3500")