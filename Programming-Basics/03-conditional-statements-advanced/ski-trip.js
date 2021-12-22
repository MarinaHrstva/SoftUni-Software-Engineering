function skiTrip(arg1, arg2, arg3) {
    let days = Number(arg1);
    let roomType = arg2;
    let rating = arg3;

    let nights = days - 1;

    let totalPrice = 0;
    let result = 0;

    switch (roomType) {
        case "room for one person":
            totalPrice = nights * 18
            result=totalPrice; break;
        case "apartment":
            totalPrice = nights * 25;
            if (days < 10&& days>0) {
                result = totalPrice * 0.7;
            } else if (days >= 10 && days <= 15) {
                result = totalPrice * .65;
            } else if (days > 15) {
                result = totalPrice * 0.5;
            }; break;
        case "president apartment":
            totalPrice = nights * 35
            if (days < 10&& days>0) {
                result = totalPrice * 0.9;
            } else if (days >= 10 && days <= 15) {
                result = totalPrice * 0.85;
            } else if (days > 15) {
                result = totalPrice * 0.8;
            }; break;
    }
    if (rating === "positive") {
        result = result * 1.25;
    } else {
        result = result * 0.9;
    }

    console.log(result.toFixed(2))

}

skiTrip("30",
"president apartment",
"negative")


