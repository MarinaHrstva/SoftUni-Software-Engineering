function weekendOrWorkingDay(arg) {
    let day = arg;

    switch (day) {

        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day"); break;
        case "Sunday":
        case "Saturday":
            console.log("Weekend"); break;
        default:
            console.log("Error"); break;
    }

}
weekendOrWorkingDay("Monday")



    // ("1")	Monday
    // ("2")	Tuesday
    // ("3")	Wednesday
    // ("4")	Thursday
    // ("5")	Friday
    // ("7")	Sunday
    // ("6")	Saturday
    // ("-1")	Error
