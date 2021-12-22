function workinghours(arg1, arg2) {
    let hour = Number(arg1);
    let day = arg2;

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open"); break;
        default: console.log("closed"); break;
        }
    }else{
        console.log("closed");
    }


}

workinghours("11", "Monday")

// ("1")	Monday
// ("2")	Tuesday
// ("3")	Wednesday
// ("4")	Thursday
// ("5")	Friday
// ("6")	Saturday
// ("7")	Sunday
